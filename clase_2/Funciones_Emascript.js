//! ------ES8

//* Object.keys
//manera rápida de obtener las claves o nombres de las propiedades de un objeto.

const persona = {
   nombre: 'Juan',
   edad: 30,
   ocupacion: 'Desarrollador'
 };
 
 const keys = Object.keys(persona);
 console.log(keys); // [nombre, edad, ocupacion]

//* Object.value
//Es una manera rápida y conveniente de obtener los valores almacenados en un objeto

const values = Object.values(persona);
console.log(values); //[Juan , 30 , Desarrollador]


//*Array.includes
//para verificar si un elemento en particular está presente en un array. Devuelve true si el elemento está en el array y false si no lo está. 

const numerosB = [1, 2, 3, 4, 5];

console.log(numerosB.includes(3)); // Devuelve true
console.log(numerosB.includes(6)); // Devuelve false

//* Spread oerator
// Indicar a javascript que traigan lo del array y le agrega los nuevos

const numeros = [1,2,3,4,5];
const nuevosNumeros = [...numeros,6,7,8]

console.log(nuevosNumeros) // [1,2,3,4,5,6,7,8]

//* Rest operator
//Suma todos los numeros contenidos en un array

function sumar(...numeros) {
   let total = 0
   for (let numero of numeros) {
      total += numero;
   }
   return total
}

console.log(sumar(3,4,5)) // 3 + 4 + 5 = 12

//? ------EJERCICIO EN CLASE

const objetos = [
{
   manzanas: 3,
   papaya: 1
},
{
manzanas:1,
sandias:6,
huevos:5
}

]



//obtener la lista de tipos de productos
 const tiposProductos = objetos.reduce((lista, objeto) => {
   Object.keys(objeto).forEach(producto => {
      if(!lista.includes(producto)) { //si no esta incluido en la lista
         lista.push(producto);
      } 
   })
   return lista
}, [])

console.log("tipos de productos: ", tiposProductos)

//Total de productos vendidos

const totalProductosVendidos = objetos.reduce((total , objeto) => {
   const cantidades = Object.values(objeto);
   const suma = cantidades.reduce((a,b) => a + b, 0)
   return total + suma;
},0) //Empezamos a sumar cada uno de los objetos

console.log("total objetos vendidos: " + totalProductosVendidos)



//! ------ES10

//*String.trim()
//Elimina los espacios en blanco

const textoConEspacios = "     Soy un texto";

console.log(textoConEspacios);

const textoSinEspacioss = textoConEspacios.trim();

console.log(textoSinEspacioss);


