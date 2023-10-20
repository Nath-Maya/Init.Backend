import express from "express";
import handlebars from 'express-handlebars';

const app = express();
const PORT = 2000;
app.use(express.static(process.cwd() + '/public'));

// Configura el motor de plantillas Handlebars
app.engine('handlebars', handlebars.engine());
app.set("views", process.cwd() + '/src/views');
app.set("view engine", "handlebars");


app.get("/", (req, res) => {
   let testUser = {
      name: "Daniel",
      last_name: "Diaz",
   };
   
   // Renderiza la plantilla "index" y proporciona los datos a través de un objeto
   res.render('index', { user: testUser });
});

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
