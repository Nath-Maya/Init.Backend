import express from 'express'
import userModel from './models/users.js'
import mongoose from 'mongoose'

const app = express()

const PORT = 8080

const enviroment = async () => {
   await mongoose.connect("")

}


app.listen(PORT, ()=> {
 console.log("servidor corriendo en el puerto ${PORT}");

})