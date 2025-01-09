const UserModel = require("../../models/userModel");
const { registerUser } = require("../../service/authService/register");

const register = async (req, res) => {
  console.log("reqqq", req.body);
  //   const user = new UserModel(req.body);
  try {
    // const response = await registerUser(user);
  } catch (err) {}
};

module.exports = { register };
