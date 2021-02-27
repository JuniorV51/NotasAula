
const express = require ('express');
const router = express.Router();
const chacklists = [
    {idchec: 1, Notaid: 2, descrição: 'Entrega em um bar no centro de campo mourao', Concluida: 'sim'},
    {idchec: 2, Notaid: 1, descrição: 'Entrega de produtos de limpeza mercado vendramini', Concluida: 'nao'},
]


router.get('/id?', function (req, res)  {
    let result;
    if(req.params.id){
     result = chacklists.find((u) => req.params.id == u.id);
    } else{
        result = chacklists;
    }
    res.json(result);
});

router.post('/', function (req, res)  {
   console.log(req.body);
    res.json({});
});

module.exports = router;