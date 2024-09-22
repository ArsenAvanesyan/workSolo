const router = require("express").Router();

const authRouter = require("./auth.routes");
const tokenRouter = require("./token.routes");
const errorRouter = require("./error.routes");
const movieRouter = require("./movie.routes")

router.use("/auth", authRouter);
router.use("/movie", movieRouter)
router.use("/tokens", tokenRouter);

router.use("*", errorRouter);

module.exports = router;
