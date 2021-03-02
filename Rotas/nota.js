const express = require ('express');
const router = express.Router();
//const notas = [
    //{Notaid: 1, id: 2, titulo:'Entrega Mercado', descrição:'Entrega de produtos de limpeza mercado vendramini', criadoEM: 26/06/2020, AtualizadoEM: 22/01/2021},
//{Notaid: 2, id: 1, titulo:'Entrega BAR', descrição:'Entrega em um bar no centro de campo mourao', criadoEM: 26/11/2020, AtualizadoEM: 25/02/2021},

//]

router.get('/Notaid?',  (req, res) => {
    res.send([]);
});

router.post('/',  (req, res) => {
    res.send({});
});

router.put('/:Notaid',  (req, res) => {
    res.send({});
});

router.delete('/:Notaid',  (req, res) => {
    res.send({});
});

module.exports = router;