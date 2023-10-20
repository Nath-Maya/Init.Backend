const fs = require("fs");

const guardarDate = () => {
  const fecha = new Date().toString();
  try {
    fs.writeFileSync("fecha.txt", fecha);
    console.log("Escribir fecha");
  } catch (error) {
    console.error("No entro la fecha", error);
  }
};

guardarDate();


const leerPackageJson = () => {
   try {
      const data = fs.readFileSync("package.json", "utf-8");
      return data;
   } catch (error) {
      console.error("Error de la lectura");
   }

};

const guardarJson =() => {
   const data = leerPackageJson()

   try {
      fs.writeFileSync("data.json", JSON.stringify(data));
      console.log("Archivo creado correctamente");
   } catch (error) {
      console.log("error al crear archivo");
      
   }
};

guardarJson();