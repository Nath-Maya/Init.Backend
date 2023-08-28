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
  //? Metodo para agregar producto

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

    //Agregar producto en el arreglo
    this.products.push(productNew);

    //Se envia el arreglo en formato JSON a la ruta.
    await fs.writeFile(this.path, JSON.stringify(this.products));
  };

  //? Metodo de la consulta

  //Variable convertir cadena JSON en un objeto javascript.
  readProducts = async () => {
    let getAnswer = await fs.readFile(this.path, "utf-8");
    return JSON.parse(getAnswer);
  };

  getProducts = async () => {
    let answerGetProd = await this.readProducts();
    return console.log(answerGetProd);
  };

  //? Consulta por # id de producto.

  getProductById = async (id) => {
    let answerGetId = await this.readProducts();
    if (!answerGetId.find((product) => product.id === id)) {
      console.error("Not found");
    } else {
      console.log(answerGetId.find((product) => product.id === id));
    }
  };

  //? Eliminar producto

  deleteProductId = async (id) => {
    let answerDelete = await this.readProducts();
    //Entregar un array de los productos diferentes al id seleccionado.
    let filterProduct = answerDelete.filter(products => products.id != id);

    console.log(filterProduct);
    await fs.writeFile(this.path, JSON.stringify(filterProduct));
  };
}

const productos = new ProductManager();

//Ingresando 2 productos
productos.addProduct("pruebq", "descripcion", 4000, "imagen", "12345", 50);

productos.addProduct("titulo2", "descripcion2", 7000, "imagen", "6789", 90);

// productos.getProducts()

// productos.getProductById(3);

productos.deleteProductId(2);
