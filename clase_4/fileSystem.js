
const fs = require('fs');
//escribir archivos

const data = "contenido para escribir en el archivo";

try {
   fs.writeFileSync('archivo.txt', data) //archivo,lo que va a contener.
   console.log("Archivo creado correctamente")

} catch(error) {
   console.error("error al escribir el archivo", error)
}

const nuevaData = "Introducir nueva informacion"

try {
   fs.appendFileSync('archivo.txt', nuevaData)
   console.log("Informacion nueva agregada")
} catch(error) {
   console.error("Error al agregar informacion",error)
}

//*Para eliminar
/*
try {
   fs.unlinkSync("archivo.txt");
   console.log("archivo eliminado")
} catch (error) {
   console.error("error al eliminar",error);
}
*/

