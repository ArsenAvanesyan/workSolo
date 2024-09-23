const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const removeHeader = require("../middleware/removeHeader");

// чтобы сервер смог обработать запрос от клиента
const serverConfig = (app) => {
  app.use(express.static(path.join(__dirname, "..", "public")));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(removeHeader);
};

module.exports = serverConfig;
