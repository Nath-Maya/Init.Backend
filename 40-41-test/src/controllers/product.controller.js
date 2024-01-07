import { ProductService } from "../services/product.service.js";
import CustomError from "../utils/errors/customError.js";
import ErrorTypes from "../utils/errors/errorTypes.js";

const productService = new ProductService();
class ProductController {
  async getAll(req, res) {
    try {
      
      const { limit, page, sort, query } = req.query;

      const products = await productService.getAll(limit, page, sort, query);
      products
        ? res.status(200).json({
            status: "success",
            payload: products,
          })
        : res.status(200).json({ status: "success", payload: [] });
    } catch (err) {
      res.status(err.status || 500).json({
        status: "error",
        payload: err.message,
      });
    }
  }

  async getOne(req, res) {
    try {
      const id = req.params.id;
      const product = await productService.getOne(id);
      product
        ? res.status(200).json({
            status: "success",
            payload: product,
          })
        : res.status(404).json({
            status: "error",
            message: "Sorry, no product found by id: " + id,
            payload: {},
          });
    } catch (err) {
      res.status(err.status || 500).json({
        status: "error",
        payload: err.message,
      });
    }
  }

  async create(req, res) {
    
      const newProduct = req.body;
      // validate code not repeated
      const response = await productService.getAll();
      const allProducts = response.docs;
      const product = allProducts.find(
        (product) => product.code == newProduct.code
      );
      

      if (product) {
        CustomError.throwNewError(
          {
            name: ErrorTypes.ENTITY_ALREADY_EXISTS_ERROR,
            cause: "Provided product already exists",
            message: `Product with code ${newProduct.code}  already exists`,
            customParameters: {entity:"Product", entityID: newProduct.code}
          }
        );
      } else {
        await productService.createProduct(newProduct);
        res
          .status(201)
          .json({ status: "success", payload: "Product created successfully" });
      }
    
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const newProduct = req.body;
      const productUpdated = await productService.update(id, newProduct);
      res.status(200).json({
        status: "success",
        payload: productUpdated,
      });
    } catch (err) {
      res.status(err.status || 500).json({
        status: "error",
        payload: err.message,
      });
    }
  }
  async deleteOne(req, res) {
    try {
      const id = req.params.id;
      const productDeleted = await productService.delete(id);
      res.status(200).json({
        status: "success",
        payload: productDeleted,
      });
    } catch (err) {
      res.status(err.status || 500).json({
        status: "error",
        payload: err.message,
      });
    }
  }
}

const productController = new ProductController();
const { getAll, getOne, create, update, deleteOne } = productController;

export { getAll, getOne, create, update, deleteOne };
