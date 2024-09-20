const router = require("express").Router();

const authRouter = require("./auth.routes");
const tokenRouter = require("./token.routes");
const errorRouter = require("./error.routes");

router.use("/auth", authRouter);
router.use("/token", tokenRouter);

router.use("*", errorRouter);

module.exports = router;
