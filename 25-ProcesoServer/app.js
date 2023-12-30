import express from "express";
import { program } from "commander";
import dotenv from "dotenv";

program
  .option("--mode <modo>", "Especificar el modo de ejecucion")
  .parse(process.argv);

if (!program.mode) {
  console.error("debe especificar con --mode");
  process.exit
}

dotenv.config({ path: `.env.${program.mode}` });

const app = express()
const port = program.mode == "development" ? 8080 : 3000

app.get("/", (req,res) => {
   res.send("Express Server")

})

app.listen(port, ()=> {
   console.log(`Server running on port: ${port}`)

})

