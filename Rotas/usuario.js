
const express = require ('express');
const router = express.Router();
const controller = require('../controller/usuario');
//const usuarios = [
 //   {id: 1, nome: 'Junior vendramini', email: 'junior_vendra@hotmail.com', Senha: 225588, avatar: 'masculino'},
//    {id: 2, nome: 'Rosana Vieira', email: 'rosana@hotmail.com', Senha: 134679, avatar: 'feminino'},
//]


router.get('/id?',  (req, res) => {
    const usuario =  controller.getUsuarios();
    res.send(usuarios);
});

router.post('/',  (req, res) => {
    res.send({});
});

router.put('/:id',  (req, res) => {
    res.send({});
});

router.delete('/:id',  (req, res) => {
    res.send({});
});

module.exports = router;