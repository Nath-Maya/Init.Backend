import express from "express";
const router = express.Router();

//Arreglo para ingresar las mascotas
const pet = []

//Crear los endpoints GET y POST. 

router.get("/pets", (req, res) => {
   res.json(pets)

});

router.post("/pets", (req, res) => {
   const newPet = req.body;
   pets.push(newPet);
   res.json({message: "Mascota agregada"});
});

export default router

//min 52