const express = require ('express');
const router = express.Router();
const tags = [
    {Notaid: 2, idtag: 1, nome: 'Junior Vendramini'},
    {Notaid: 1, idtag: 2, nome: 'Fernando sobral'},
]


router.get('/id?', function (req, res)  {
    let result;
    if(req.params.id){
     result = tags.find((u) => req.params.id == u.id);
    } else{
        result = tags;
    }
    res.json(result);
});

router.post('/', function (req, res)  {
   console.log(req.body);
    res.json({});
});

module.exports = router;