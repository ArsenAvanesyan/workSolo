require("dotenv").config();
const express = require("express");
const serverConfig = require("./config/serverConfig");

const indexRouter = require("./routes/index.routes");

const PORT = process.env.PORT ?? 4000;

//экземпляр приложения
const app = express();

//запуск конфигурации
serverConfig(app);

//главный маршрутизатор
app.use("/api", indexRouter);

//запуск порта
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
