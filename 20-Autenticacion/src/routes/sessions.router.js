import { Router } from "express";
import userModel from "../models/Users.model.js";
import { createHash, isValidPassword } from "../utils.js";

const router = Router();

//!REGISTER USER
router.post("/register", async (req, res) => {
  //construccion del cuerpo del registro
  const { first_name, last_name, email, age, password } = req.body;
  //Validar el ingreso de los datos
  if (!first_name || !last_name || !email || !age)
    return res.status(400).send({ status: "error", error: "Error user " });

  //Creo el usuario, pero al password le digo que utilice el createHash
  const user = {
    first_name,
    last_name,
    email,
    age,
    password: createHash(password),
  };

  //Pasamos el user al model por medio del create.
  let result = await userModel.create(user);
  res.send({ status: "sucess", message: "User registered" });
});

//! LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).send({ status: "error", error: "Error User" });

  const user = await userModel.findOne(
    { email: email },
    { email: 1, first_name: 1, last_name: 1, password: 1 }
  );
  if (!user)
    return res.status(400).send({ status: "error", error: "Error User" });
  if (!isValidPassword(user, password))
    return res.status(403).send({ status: "error", error: "Error Credential" });
  req.session.user = user;
  res.send({ status: "success", payload: user });
});

export default router;
