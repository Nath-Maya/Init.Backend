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
    if(this.products.some(producto => producto.code == code)) {
      console.log(`El codigo ${code} esta repetido`);
      return;    
    }

    //Generar id incremental
    const idProducto = this.products.length + 1;

    //Propiedades del producto

    this.products.push({
      id: idProducto,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    });
  }

  
  getProducts() {
    //Devolver el array products con todos los productos creados hasta ese momento.
    return this.products;
  }

  productExiste(id){
    //Verificar si el producto existe con un id

    return this.products.find((producto) => producto.id === id);
    
  }

  getProductById(id) {
    //Validacion
    !this.productExiste(id) ? console.log("not found") : console.log(this.productExiste(id))
  }
}

const productos = new ProductManager();

console.log(productos.getProducts())

productos.addProduct("Bicicleta", "Scott doble suspension", 2500000, "No tiene", "abc", 520);
productos.addProduct("Bicicleta", "Treck Rin 29", 1500000, "No tiene", "abcd", 20);

console.log(productos.getProducts())

productos.addProduct("Bicicleta", "Treck Rin 29", 1500000, "No tiene", "abcd5555", 20);

console.log(productos.getProducts())