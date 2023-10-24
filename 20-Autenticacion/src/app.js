//Dependencias requeridas
import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import handlebars from "express-handlebars";
import chalk from "chalk";
// Fuentes de metodos, informacion y vistas.
import __dirname from "./utils.js";
import viewRouter from "./routes/views.router.js";
import sessionRouter from "./routes/sessions.router.js";

//!----------SERVER
const app = express(); //Levanto servidor
const PORT = 3002;

//!----------CONECCTION DATABASE
const connection = mongoose.connect(
  "mongodb+srv://nathamayaramirez93:1234Maya@cluster0.am2h5td.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.on("connected", () => {
  try {
    console.log("\u001b[1;35m Conexion at database sucess");
  } catch (error) {
    console.log("\u001b[1;31m Conexion at database failed");
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public")); //Rutas

//!----------SESSIONS DATABASE
app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://nathamayaramirez93:1234Maya@cluster0.am2h5td.mongodb.net/",
      // mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      ttl: 3600,
    }),
    secret: "2509",
    resave: false,
    saveUninitialized: false,
  })
);

//!----------UP HANDLEBARS
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/", viewRouter);
app.use("/api/sessions", sessionRouter);

app.listen(PORT, () =>
  console.log(chalk.bgCyanBright.black.bold(`SERVER UP CLASS AUTENTICATION : ${PORT}`))
);
