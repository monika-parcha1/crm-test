const { register } = require("../controller/authService/register");
const Router = require("./router");

const authRouter = new Router();
console.log("hhhhhhh");
authRouter.post("/register", register);

module.exports = authRouter;
