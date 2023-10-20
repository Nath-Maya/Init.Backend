import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import { FileStore } from "session-file-store";

const fileStorage = FileStore(sessions); //Crear sessions en archivos.
const app = express(); //Levanto servidor

app.use(cookieParser());

//!SESSIONS :
//Definir la ruta de las sessions, tiempo de caducidad de la session  e intentos del servidor para leer.

app.use(
  session({
    store: new fileStorage({ path: "./src/sessions", ttl: 100, retries: 0 }),
    secret: "123456",
    resave: false,
    saveUninitialized: false
  })
);
