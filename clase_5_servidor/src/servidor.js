//? LEVANTAR SERVIDOR

/*
const http = require("http");

const server = http.createServer((req, res) => {
   res.end("Mi primer hola mundo en server")

})

server.listen(8080, () => {
   console.log("Servidor escuchando en el puerto 8080")
})
*/

//Para instalar express es : npm install express
//Es una dependencia de desarrollo y debe instalarse en cada proyecto

//* SERVIDOR CON EXPRESSS

const express = require("express");
const servidor = express();
const PORT = 8080;

//!Defincion de un Endpoint

servidor.get("/saludos", (req, res) => {
   res.send("Saludos desde el endpoint");
})

servidor.listen(PORT, () => {
  console.log(`Server escuchando en ${PORT}`);
});