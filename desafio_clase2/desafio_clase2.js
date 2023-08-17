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

    const idProducto = this.products.length + 1;

   const  productNew = {
      id: idProducto,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    }

    //Imprimir los valores todos los datos
    if(Object.values(productNew).includes(undefined)) {
     console.log("Not found");
    return;
    }

    this.products.push(productNew);
    
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
      ? console.log("not found")
      : console.log(this.productExiste(id));
  }
}

const productos = new ProductManager();

console.log(productos.getProducts());

productos.addProduct(
  "Bicicleta",
  "Scott doble suspension",
  2500000,
  "No tiene",
  "abc",
  520
);
productos.addProduct(
  "Bicicleta",
  "Treck Rin 29",
  1500000,
  "No tiene",
  "abcd",
  20
);


//3er item agregado.
productos.addProduct(
  "Bicicleta",
  "Treck Rin 29",
  1500000,
  "No tiene",
  "abcd5"
);

console.log(productos.getProducts());
