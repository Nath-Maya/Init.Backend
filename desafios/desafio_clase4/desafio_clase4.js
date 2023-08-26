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
  }

  //Id incrementable
  static id = 0;

  addProducto = async (title, description, price, img, code, stock) => {
    ProductManager.id++;

    let productNew = {
      title,
      description,
      price,
      img,
      code,
      stock,
      id: ProductManager.id,
    };

    console.log("Producto creado" + productNew);
    console.log(productNew);

    //Se envia el producto en formato JSON a la ruta.
    await fs.writeFile(this.path, JSON.stringify(productNew));
  };
}

const productos = new ProductManager();

productos.addProducto("titulo1", "descripcion", 4000, "imagen", "12345", 50);
