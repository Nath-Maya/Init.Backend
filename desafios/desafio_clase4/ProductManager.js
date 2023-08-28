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
      console.log("Producto consultado con id: " + id)
    }
  };

  //? Eliminar producto

  deleteProductId = async (id) => {
    let answerDelete = await this.readProducts();
    //Entregar un array de los productos diferentes al id seleccionado.
    let filterProduct = answerDelete.filter((products) => products.id != id);

    await fs.writeFile(this.path, JSON.stringify(filterProduct));
    console.log("Producto Eliminado");
  };

  updateProduct = async ({ id, ...producto }) => {
    //Eliminar el producto antes de editarlo.
    await this.deleteProductId(id);
    //Arreglo de los productos que quedan.
    let productStock = await this.readProducts();
    //Arreglo donde se incluye el id modificado y los productos restantes.
    let productModificado = [{ id, ...producto }, ...productStock];
    //Se edita nuevamente el archivo que contiene la ruta path.
    await fs.writeFile(this.path, JSON.stringify(productModificado));
    console.log("actualizados: ")
    console.log(productModificado);
  };
}

const productos = new ProductManager();

