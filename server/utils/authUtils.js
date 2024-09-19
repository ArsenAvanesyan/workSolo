require("dotenv").config();
const jwt = require("jsonwebtoken");

function generateTokens(payload) {
  // payload(полезная нагрузка) возвращает 2 ключа
  return {
    // восковый билет
    accessToken: jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: `${1000 * 60 * 5}`, // время жизни cookie
    }),
    // чек
    refreshToken: jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: `${1000 * 60 * 60 * 12}`, // время жизни cookie
    }),
  };
}

module.exports = generateTokens;
