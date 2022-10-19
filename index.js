const express = require('express');
const server = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT

server.get('/', (req,res)=>{
    res.send(`
    
    hola ${process.env.NAME}
    <img src="${process.env.IMG}">
    `)

})

server.listen(port, ()=>{
    console.log(`servidor abierto en el puerto ${port}`)
})