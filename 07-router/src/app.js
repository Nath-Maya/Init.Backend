import express from "express";
import path from "path";
import petsRouter  from "./routes/pets_router.js";
const app = express();
const PORT = 8080;

//!-----MIDDLEWARE

app.use(express.json()); //Preparar mi app para recibir las solicitudes en formato json
app.use(express.urlencoded({extended: true})); //Preparar mi entorno para recibir en forma de datos codificados en URL. El extended procesa datos mas complejos.

//!-----CONFIGURAR LOS ARCHIVOS ESTATICOS

app.use(express.static(path.join(process.cwd(),'public')));
//process.cwd cambia la ruta __dirname. 

//!-----RUTAS

app.use("/", petsRouter)

app.listen(PORT, () => {
   console.log(`Servidor corriendo en puerto ${PORT}`);
});


