const express = require('express');
const server = express();
const port = 3000;


const Routes = require ('./routes');

server.use('/api/v1/clients' , Routes.clientRoutes);
server.use('/api/v1/products' , Routes.productRoutes);
server.use('/api/v1/sales' , Routes.saleRoutes);

server.listen(port, () => {
    console.log(`API escuchando en puerto: ${port}`);
});