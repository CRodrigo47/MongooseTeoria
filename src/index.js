require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const usersRouter = require("./routers/users");
app.use("/api/users", usersRouter);

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error(err));

app.listen(process.env.PORT, () =>
  console.log("Servidor iniciado en el puerto " + process.env.PORT + "...")
);

app.get("/", (req, res) => res.end("Bienvenido a mi API"));
