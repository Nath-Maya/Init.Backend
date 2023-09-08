
import express from "express";
import handlebars from 'handlebars';


const app = express();
const PORT = 8080;

app.engine("handlebars", handlebars.engine());

app.set("views",process.cwd() + '/views');

app.set("view engine", "handlebars");

app.use(express.static(process.cwd() + '/public'))

app.get("/", (req, res) => {
   let testUser = {
      name: "Daniel",
      last_name: "diaz",
   
   }
   res.render('index', testUser)

})


app.listen(PORT, () => console.log(`servidor corriendo en el puerto ${PORT}`))