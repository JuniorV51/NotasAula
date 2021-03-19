const express = require('express');
const bodyParser = require ('body-parser');
const usuario = require('./rotas/usuario');
const nota = require ('./rotas/nota');
const checklist = require ('./rotas/checklist');
const tag = require ('./rotas/tag');
const fs = require('fs');
const https = require('https');
const cors = requere ('cors');
const app = express();
const port = 3000;
const portaHttps = 443;

app.use(cors({
    origin: ['http://localhost:8080'],
    })
);
app.use(bodyParser.json());

app.use('/tag', tag);
app.use('/checklist', checklist);
app.use('/nota', nota);
app.use('/usuario', usuario);

const key = fs.readFileSync('certs/localhost-key.pem');
const cert = fs.readFileSync('certs/localhost.pem');

const credentials = { key, cert };

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(portaHttps, () => {
    console.log(`API rodando seguramente na porta ${portaHttps}`)
});

app.listen(port, () =>{
    console.log('Aplicação rodando em http://localhost:3000');
});