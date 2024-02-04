const express = require("express");
const cors = require("cors");

const v1Router = require("./routes/index.js");

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1", v1Router);

// // ---------------- TEST ------------------

// const { authMiddleware } = require("./middleware.js");

// app.get("/", authMiddleware, (req, res) => {
//   res.status(200).json({ msg: "Working fine", id: req.userId });
// });

// // ---------------- TEST ------------------

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
