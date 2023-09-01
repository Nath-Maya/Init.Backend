import express from 'express';

const app = express();


app.get('/consulta', (req, res) => {
   res.json({msg: "hola"})
})

app.post('/api', (req, res) => {
   res.json({msg: "POST"})
});

app.put('/api', (req, res) => {
   res.json({msg: "PUT"})
});

app.delete('/api', (req, res) => {
   res.json({msg: "DELETE"})
});

//Peticion del servidor
app.listen(8080, () => {
   console.log("Server arriba");
});


