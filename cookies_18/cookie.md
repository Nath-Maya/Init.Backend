## Que es una Cookie

Pequeño fragmento de datos que se almacena en el navegador. 

Se utiliza para mantener información persistente entre la solicitudes del cliente y las respuestas.
- Guarda informacion especifica del usuario entre diferentes interacciones.



```shell
app.get("/setCookie", (req,res)=> {
   res.cookie("coderCookie", "Soy Cookie", { maxAge: 1000}).send("Cookie")
})
```