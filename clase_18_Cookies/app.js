import express from "express"
import cookieParser from "cookie-parser"


const app = express()

app.use(cookieParser("claveSecreta"))

app.get("/setCookie", (req,res)=> {
   res.cookie("coderCookie", "Soy Cookie", { maxAge: 1000}).send("Cookie")
})

app.get("/getCookie"), (req,res)=> {
   res.send(req.cookies)
}

app.get("/deleteCookie", (req,res)=> {
   res.clearCookie("coderCookie").send("cookie eliminada")
})

app.get("/setSignedCooke", (req,res)=> {
   res.cookie("Cookie firmada", "recibo cookie fiermada", { maxAge: 10000, signed: true}).send("Cookie")
})

app.listen(8080, ()=> {
   console.log("\u001b[1;33m Servidor arriba ")
})