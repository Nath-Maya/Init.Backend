import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import FileStore from "session-file-store";
import chalk from "chalk";


const fileStorage = FileStore(session); //Crear sessions en archivos.
const app = express(); //Levanto servidor
const PORT = 8080;
app.use(cookieParser());

//!SESSIONS :
//Definir la ruta de las sessions, tiempo de caducidad de la session  e intentos del servidor para leer.

app.use(
  session({
    store: new fileStorage({ path: "./src/sessions", ttl: 100, retries: 0 }),
    secret: "123456",
    resave: false,
    saveUninitialized: false,
  })
);



app.get("/", (req, res) => {
  req.session.counter = 1;
  res.send("Bienvenido");
});


 app.listen(PORT, ()=> 
  console.log(chalk.bgCyan.black(`Server Up port: ${PORT}`))
)