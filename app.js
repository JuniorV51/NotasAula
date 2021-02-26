const express = require('express');
const usuario = require(' ./rotas/usuarios');
const app = express();
const port = 3000;

app.use('/usuario', usuario);

app.listen(port, () =>{
    console.log('Aplicação rodando em http://localhost:3000');
});