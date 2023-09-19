import express from "express"
const app = express()


const PORT = 3000

app.get("/", (req, res) => {
   res.send("Mi aplicacion con socket.io")
})

app.listen(PORT, () => { 
   console.log( "\u001b[1;33m Servidor arriba: " + `${PORT}` );
});