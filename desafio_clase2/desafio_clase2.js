//! DESAFIO ENTREGABLE CLASE #2
//EMAScript y ECMAScript avanzado
//Comision: 58055
//Estudiante: Nathalia Maya Ramirez

//Crear clase con el array vacio products.
class ProductManager {
  constructor() {
    //Agregara un producto al array vacio de productos inicial.
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    //validar si el code se repite en el array de products.
    if (this.products.some((producto) => producto.code == code)) {
      console.log(`El codigo ${code} esta repetido`);
      return;
    }

    //Id incremental
    const idProducto = this.products.length + 1;

    const productNew = {
      id: idProducto,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    //Extraer los valores de cada objeto que contiene un producto, verificar si hay undefined. 
    if (Object.values(productNew).includes(undefined)) {
      console.log("Todos los campos son requeridos");
    } else {
      //Agregar el producto nuevo que cumple contodo al array de productos. 
      
      return this.products.push(productNew);
    }
  }

  getProducts() {
    //Devolver el array products con todos los productos creados hasta ese momento.
    return this.products;
  }

  productExiste(id) {
    //Verificar si el producto existe con un id

    return this.products.find((producto) => producto.id === id);
  }

  getProductById(id) {
    //Validacion
    !this.productExiste(id)
      ? console.log("Not found")
      : console.log(this.productExiste(id));
  }
}
