const express = require('express');
const bodyParser = require ('body-parser');
const usuario = require(' ./rotas/usuario');
const nota = require (' ./rotas/nota');
const checklist = require (' ./rotas/checklist');
const tag = require (' ./rotas/tag');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/tag', tag);
app.use('/checklist', checklist);
app.use('/nota', nota);
app.use('/usuario', usuario);



app.listen(port, () =>{
    console.log('Aplicação rodando em http://localhost:3000');
});