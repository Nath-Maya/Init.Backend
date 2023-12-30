import { Router } from "express";
import authRoutes from "./authRoutes.js";
import homeRoutes from "./homeRoutes.js";
import productRoutes from "./productRoutes.js";
import cartRoutes from "./cartRoutes.js";
import chatRoutes from "./chatRoutes.js";
import { generateProducts } from "../../utils/mock.generators.js";

const router = Router();

router.use("/home", homeRoutes);
router.use("/products", productRoutes);
router.use("/carts", cartRoutes);
router.use("/chat", chatRoutes);
router.use("/", authRoutes);

router.get("/mockingproducts", (req,res)=>{
  const products =  (arr = [])=>{
      for(let i =0; i<100; i++)
          arr.push(generateProducts())
      return arr
  }

  res.status('200').send({products: products()})

})

router.use("/error", (req, res) => {
  const { errorMessage } = req.flash();
  res.render("error", { errorMessage });
});

router.use("/", (req, res) => {
  res.redirect("/home");
});

router.use("*", (req, res, next) => {
  res.render("notfound");
});
export default router;
