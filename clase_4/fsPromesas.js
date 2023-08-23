const fs = require('fs')



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





