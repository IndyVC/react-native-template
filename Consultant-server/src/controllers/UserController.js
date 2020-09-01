const userModel = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.create = (request, response, next) => {
  userModel.create(
    {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
    },
    function (err, results) {
      if (err) {
        next(err);
      } else {
        response.json({ status: "success", message: "user added", data: null });
      }
    }
  );
};

exports.authenticate = (request, response, next) => {
  userModel.findOne({ email: request.body.email }, function (err, user) {
    if (err) {
      next(err);
    } else {
      if (bcrypt.compareSync(request.body.password, user.password)) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, {
          expiresIn: "1h",
        });
        response.json({
          status: "success",
          message: "user found",
          data: { user: user, token: token },
        });
      } else {
        response.json({
          status: "error",
          message: "Invalid email/password!",
          data: null,
        });
      }
    }
  });
};
