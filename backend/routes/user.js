const express = require("express");
const jwt = require("jsonwebtoken");

const { User, Account } = require("../db.js");
const { zs_signup, zs_signin, zs_update_userinfo } = require("../zod.js");
const { JWT_SECRET } = require("../config.js");
const { authMiddleware } = require("../middleware.js");

const router = express.Router();
// @Route = /api/v1/user

router
  // @Sign Up / POST
  .post("/signup", async (req, res) => {
    try {
      const { success } = zs_signup.safeParse(req.body);
      if (!success)
        return res
          .status(411)
          .json({ message: "Incorrect inputs", success: false });

      const existingUser = await User.findOne({ username: req.body.username });
      if (existingUser)
        res
          .status(411)
          .json({ message: "Email already taken", success: false });

      const newUser = await User.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
      });

      const userAccount = await Account.create({
        userId: newUser._id,
        balance: Math.floor(1 + Math.random() * 10000),
      });

      const token = jwt.sign({ userId: newUser._id }, JWT_SECRET);

      res.status(200).json({
        message: "User created successfully",
        token: token,
        success: true,
        balance: userAccount.balance,
      });
    } catch (e) {
      console.log(e);
    }
  })
  // @Sign In / POST
  .post("/signin", async (req, res) => {
    const { success } = zs_signin.safeParse(req.body);
    if (!success) return res.status(411).json({ message: "Incorrect inputs" });

    let user = null;
    try {
      user = await User.findOne({
        username: req.body.username,
        password: req.body.password,
      });
    } catch (err) {
      console.log(err);
    }

    if (!user)
      return res.status(411).json({ message: "Incorrect email/password" });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.status(200).json({ token });
  })
  // @Edit details / PUT
  .put("/update", authMiddleware, async (req, res) => {
    const editBody = zs_update_userinfo.safeParse(req.body);
    if (!editBody.success)
      return res.status(411).json({
        message: "Error while updating information",
        error: editBody.error,
      });

    try {
      const updatedUser = await User.updateOne({ _id: req.userId }, req.body);
      res
        .status(200)
        .json({ message: "Updated successfully", updatedDetails: updatedUser });
    } catch (error) {
      res.status(411).json({
        message: "Error while updating information",
        error: error,
      });
    }
  })
  // @Filter / GET
  .get("/bulk", authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";
    try {
      const users = await User.find({
        $or: [
          { firstName: { $regex: filter } },
          { lastName: { $regex: filter } },
        ],
      });
      res.status(200).json({
        users: users.reduce((a, user) => {
          if (user._id.valueOf() !== req.userId)
            a.push({
              username: user.username,
              firstName: user.firstName,
              lastName: user.lastName,
              _id: user._id,
            });
          return a;
        }, []),
      });
    } catch (error) {
      res.status(411).json({
        message: "Error while updating information",
        error: error,
      });
    }
  });

module.exports = router;
