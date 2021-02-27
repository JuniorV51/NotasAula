const express = require ('express');
const router = express.Router();
const notas = [
    {Notaid: 1, id: 2, titulo:'Entrega Mercado', descrição:'Entrega de produtos de limpeza mercado vendramini', criadoEM: 26/06/2020, AtualizadoEM: 22/01/2021},
    {Notaid: 2, id: 1, titulo:'Entrega BAR', descrição:'Entrega em um bar no centro de campo mourao', criadoEM: 26/11/2020, AtualizadoEM: 25/02/2021},

]

router.get('/id?', function (req, res)  {
    let result;
    if(req.params.id){
     result = notas.find((u) => req.params.id == u.id);
    } else{
        result = notas;
    }
    res.json(result);
});

router.post('/', function (req, res)  {
   console.log(req.body);
    res.json({});
});

module.exports = router;