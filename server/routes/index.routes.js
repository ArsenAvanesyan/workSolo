const router = require("express").Router();

const authRouter = require("./auth.routes");
// const bookRouter = require("./book.routes");
const tokenRouter = require("./token.routes");
const errorRouter = require("./error.routes");

router.use("/auth", authRouter);
// router.use("/book", bookRouter);
router.use("/token", tokenRouter);

router.use("*", errorRouter);

module.exports = router;
