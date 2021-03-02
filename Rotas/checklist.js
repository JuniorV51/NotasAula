
const express = require ('express');
const router = express.Router();
//const chacklists = [
    //{idchec: 1, Notaid: 2, descrição: 'Entrega em um bar no centro de campo mourao', Concluida: 'sim'},
   // {idchec: 2, Notaid: 1, descrição: 'Entrega de produtos de limpeza mercado vendramini', Concluida: 'nao'},
//]


router.get('/idchec?',  (req, res) => {
    res.send([]);
});

router.post('/',  (req, res) => {
    res.send({});
});

router.put('/:idchec',  (req, res) => {
    res.send({});
});

router.delete('/:idchec',  (req, res) => {
    res.send({});
});

module.exports = router;