import express from 'express';
import { Server } from 'socket.io';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import ProductManager from './productManager.js';

import viewsRouter from './routes/views.router.js';
import cartRouter from './routes/cart.router.js';
import productsRouter from './routes/products.routes.js';

const pm = new ProductManager('../');
const app = express();
app.use(express.static(__dirname+'/public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

const server = app.listen(8080, () => console.log("Server Up 8080"));
export const io = new Server(server);

app.use('/',viewsRouter);
app.use('/api/carts', cartRouter);
app.use('/api/products', productsRouter);

const products =  await pm.getProducts(); 

io.on('connection',socket => {   
    console.log("Inicio la comunicación");

    io.emit('products', products);
    socket.on('products', data => {
        products.push(data); 
        io.emit('products', products);
        console.log(data);
    })
})
