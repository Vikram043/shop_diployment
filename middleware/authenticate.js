require("dotenv").config();

const jwt = require("jsonwebtoken");

const compareToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, "masaischool", (err, user) => {
      if (err) return reject(err);
      return resolve(user);
    });
  });
};

module.exports = async (req, res, next) => {
  if (!req.headers.authorization)
    return res
      .status(400)
      .send("authorization token is not provided or invalid");

  if (!req.headers.authorization.startsWith("Bearer "))
    return res
      .status(400)
      .send("authorization token is not provided or invalid");

  const token = req.headers.authorization.split(" ")[1];

  let user;
  try {
    user = await compareToken(token);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
  req.user = user.user;
  return next();
};
