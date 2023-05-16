const Post = require("../models/post.model");

const authorise = (permittedRole) => {
  return (req, res, next) => {
    let user = req.user;

    let permitted = false;

    permittedRole.map((role) => {
      if (user.role.includes(role)) permitted = true;
    });

    if (!permitted)
      return res.status(403).send({ message: "permission denied" });

    return next();
  };
};

const authoriseId = () => {
  return async(req, res, next) => {
    let userId = req.user._id;

    let postuserId;

    try {
      const post = await Post.findById(req.params.id).lean().exec();

      postuserId = post.user_id.toHexString();

    } catch (err) {
      return res.status(500).send({ message: err.message });
    }

    if (userId === postuserId) return next();

    return res.status(403).send({ message: "permission denied" });
  };
};

module.exports = { authorise, authoriseId };
