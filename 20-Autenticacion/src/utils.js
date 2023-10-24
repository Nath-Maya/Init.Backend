import { fileURLToPath } from "url";
import { dirname } from "path";
import bcrypt, { genSaltSync } from "bcrypt";

//! ----- HASH
//Crear el hash para que el register cree el hash cuando se ingrese una contraseña
//utilizar lo que tiene el password utilizando la libreria.
export const createHash = (password) =>
  bcrypt.hashSync(password, genSaltSync(10));

//* VERIFICAR HASH
//Se debe tener el user, comparando el password del usuario.
export const isValidPassword = (user, password) =>
  bcrypt.compareSync(password, user.password);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

