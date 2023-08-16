//! DESAFIO ENTREGABLE CLASE #2
//EMAScript y ECMAScript avanzado
//Comision: 58055
//Estudiante: Nathalia Maya Ramirez

//Crear clase con el array vacio products.
class ProductManager {
  constructor() {
    this.products = [];
  }

  //Agregara un producto al array vacio de productos inicial.
  addProduct(title, description, price, thumbnail, code, stock) {

    

   //Generar id incremental
    const idProducto = this.products.length + 1;

    //Propiedades del producto
    const producto = {
      id: idProducto,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(producto);
  }

  //Devolver el array products con todos los productos creados hasta ese momento.
  getProducts(){
    return this.products;
  }

  //Validara el producto con el id.
  getProductById() {
  /*
    const productAdd = this.products.find((producto) => producto.id === producto.id);

    if (!productAdd) {
      console.log("Este producto no existe");
    } else {
    console.error("Estre producto con este codigo: " + code + " YA existe")
    }
    */

    return
  
  }
}


const productos = new ProductManager();

productos.addProduct("Bicicleta", "Scott doble suspension", 2500000, "No tiene", 1, 520);
productos.addProduct("Bicicleta", "Treck Rin 29", 1500000, "No tiene", 2, 20);
productos.addProduct("Bicicleta", "Treck Rin 29", 1500000, "No tiene", 2, 20);

console.log(productos.getProducts());