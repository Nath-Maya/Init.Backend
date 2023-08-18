//*Arrow functions

const saludar = () => "hola";
saludar();

//!Arrow function en un array de objetos

const usuarios = [
  { nombre: "a", edad: 20 },
  { nombre: "b", edad: 14 },
];

const nombres = usuarios.map((usuario) => usuario.edad);
// console.log(nombres);

//!arrow functions como metodo de un objetos

const persona = {
  nombre: "Coder",
  edad: 30,
  saludar: function () {
    return `Hola soy ${this.nombre}`;
  },
};

// console.log(persona.saludar());

//*CALLBACK

//! En una funcion asincrona.

function obtenerDatosUsuario(id, callback) {
  setTimeout(() => {
    const usuario = {
      id: id,
      nombre: "coder",
      email: "coder@hose.com",
    };
    callback(usuario);
  }, 2000);
}

function mostrarDatosUsuario(usuario) {
  //   console.log(`Nombre: ${usuario.nombre}, Email: ${usuario.email}`);
}

obtenerDatosUsuario(123, mostrarDatosUsuario);

//! PROMESA
//Tiene 3 estados : Pending, resolved, rejected.

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = true;

    if (exito) {
      resolve("completado");
    } else {
      reject("error");
    }
  }, 5000);
});

console.log(promesa);

promesa
  .then((mensaje) => {
    console.log("Exito", mensaje);
  })
  .catch((error) => {
    console / log("Error", error);
  });

//?Sincronismo:
//Ejecucion en cascada

function getUsure(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataUser = {
        id: id,
        nombre: "nathalia",
        edad: 30,
      };
      if (dataUser) {
        resolve(dataUser);
      } else {
        reject("no se puede obtener los datos");
      }
    }, 5000);
  });
}

async function mostrarDataUser(id) {
   try{
    const dataUser = await getUsure(id)
    console.log("datos del usuario ", dataUser)
   } catch (error) {
      console.log("error al obtener datos ", error)
   
   }
} 

mostrarDataUser(456)