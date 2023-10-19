import { Router } from "express";
import cookieParser from "cookie-parser";

const router = Router();

router.use(cookieParser())

router.get("/", (req, res) => {
   res.send("Hola mundo");
})

router.get("/setCookie", (req, res) => {
   res.cookie("Mi primer cookie", "Esta es una cookie poderosa", {maxAge: 10000}).send("Cookie")
})

export default router;