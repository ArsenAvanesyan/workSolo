const router = require("express").Router();
const bcrypt = require("bcrypt");
const UserServices = require("../services/User.services");
const generateTokens = require("../utils/authUtils");
const jwtConfig = require("../config/jwtConfig");

router.post("/registration", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      res.status(400).json({ message: "Заполните все поля" });
    }

    const hashPassword = await bcrypt.hash(password, 8);

    const user = await UserServices.createUser({
      name,
      email,
      password: hashPassword,
    });

    if (user) {
      delete user.dataValues.password;

      const { accessToken, refreshToken } = generateTokens({ user });

      res
        .status(201)
        .cookie(jwtConfig.refresh.type, refreshToken, {
          httpOnly: true,
          maxAge: jwtConfig.refresh.expiresIn,
        })
        .json({ message: "success", user, accessToken });
      return;
    }
    res.status(400).json({ message: "Произошла ошибочка" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post("/authorization", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email.trim() === "" || password.trim() === "") {
      res.status(400).json({ message: "Заполните все поля" });
      return;
    }

    const user = await UserServices.getUser(email);

    if (user) {
      const compare = await bcrypt.compare(password, user.password);
      if (compare) {
        delete user.password;
        const { accessToken, refreshToken } = generateTokens({ user });
        console.log(user);
        res
          .status(200)
          .cookie(jwtConfig.refresh.type, refreshToken, {
            httpOnly: true,
            maxAge: jwtConfig.refresh.expiresIn,
          })
          .json({ message: "success", accessToken, user });
        return;
      }
      res.status(400).json({ message: "Email или Password неверные" });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete("/logout", (req, res) => {
  try {
    res.locals.user = undefined;
    res.clearCookie("refreshToken").status(200).json({ message: "success" });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
