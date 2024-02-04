const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

async function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ message: "Token is missing" });

  try {
    req.userId = jwt.verify(token, JWT_SECRET).userId;

    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid Token", error: err });
  }
}

module.exports = { authMiddleware };
