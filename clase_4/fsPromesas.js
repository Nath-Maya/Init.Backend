const fs = require('fs')

/*
const data = "informacion para el archivo"

async function readFile() {
   try {
      const data = await fs.readFile("archivo.txt", "utf-8");
      console.log("contenido del archivo2")
   } catch (error) {
      console.log("Error de lectura", error);
   }
}
*/

const guardarDate = () => {
   const fecha = new Date().toString()
   try {
      fs.writeFileSync("fecha.txt", fecha);
      console.log("Escribir fecha");
   } catch (error) {
      console.error("No entro la fecha", error)
      
   }

};

guardarDate();





