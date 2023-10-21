import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import chalk from "chalk";
import MongoStore from "connect-mongo";

const app = express(); //Levanto servidor
const PORT = 8080;
app.use(cookieParser());

//!SESSIONS CON DATABASE:
//Definir la ruta de las sessions, tiempo de caducidad de la session  e intentos del servidor para leer.

app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://nathamayaramirez93:1234Maya@cluster0.am2h5td.mongodb.net/",
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true }
    }),
    secret: "2509",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  req.session.counter = 1;
  res.send("Bienvenido");
});

app.listen(PORT, () =>
  console.log(chalk.bgCyan.black(`Server Up port: ${PORT}`))
);


