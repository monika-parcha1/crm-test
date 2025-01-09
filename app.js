const express = require("express");
const checkDBConnection = require("./src/config/dbconfig");
const apiRoutes = require("./src/routes/index.js");
const authRouter = require("./src/routes/auth.js");
const app = express();
app.use(express.json());

app.use(`/api/${apiRoutes.authServiceBase}`, authRouter);
app.listen(8080, () => {
  console.log("server is running on 8080");
  try {
    checkDBConnection();
  } catch (err) {
    console.log("fail to connect with database", err);
  }
});
