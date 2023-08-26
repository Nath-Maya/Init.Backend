//! DESAFIO ENTREGABLE CLASE #4
//Manejo de archivos con fileSystem
//Comision: 58055
//Estudiante: Nathalia Maya Ramirez

//Se inicia con la importacion de las promesas
import { promises as fs } from "fs";

class ProductManager {
  constructor() {
    //Crear la ruta del archivo
    this.path = "./productos.txt";
    this.products = [];
  }

 
  addProduct = async (title, description, price, img, code, stock) => {

   //Id incrementable
   const idProduct = this.products.length + 1;

    let productNew = {
      title,
      description,
      price,
      img,
      code,
      stock,
      id: idProduct,
    };

    console.log(productNew);

    //Agregar producto en el arreglo
    this.products.push(productNew);

    //Se envia el arreglo en formato JSON a la ruta.
    await fs.writeFile(this.path, JSON.stringify(this.products));
  };
}

const productos = new ProductManager();


//Ingresando 2 productos
productos.addProduct("titulo1", "descripcion", 4000, "imagen", "12345", 50);

productos.addProduct("titulo2", "descripcion2", 7000, "imagen", "6789", 90);