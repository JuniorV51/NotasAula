
const express = require ('express');
const router = express.Router();
const usuarios = [
    {id: 1, nome: 'Junior vendramini', email: 'junior_vendra@hotmail.com', Senha: 225588, avatar: 'masculino'},
    {id: 2, nome: 'Rosana Vieira', email: 'rosana@hotmail.com', Senha: 134679, avatar: 'feminino'},
]


router.get('/id?', function (req, res)  {
    let result;
    if(req.params.id){
     result = usuarios.find((u) => req.params.id == u.id);
    } else{
        result = usuarios;
    }
    res.json(result);
});

router.post('/', function (req, res)  {
   console.log(req.body);
    res.json({});
});

module.exports = router;