
import express from "express";
const app = express();

const PORT = 8080;

//!-----MIDDLEWARE

app.use(express.json());
app.use(express.urlencoded({extended: true}));


//!-----RUTAS

app.listen(PORT, () => {
   console.log(`Servidor corriendo en puerto ${PORT}`);

});