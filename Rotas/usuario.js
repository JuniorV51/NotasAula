
const express = require ('express');
const router = express.Router();
const controller = require('../controller/default');
const { Usuario } = require('../models');
//const usuarios = [
 //   {id: 1, nome: 'Junior vendramini', email: 'junior_vendra@hotmail.com', Senha: 225588, avatar: 'masculino'},
//    {id: 2, nome: 'Rosana Vieira', email: 'rosana@hotmail.com', Senha: 134679, avatar: 'feminino'},
//]


router.get('/id?', async (req, res) => {
    const { id } = req.params;

    const usuario =  id ? await controller.getById(Usuario, id) : await controller.getAll(Usuario);
    res.send(usuarios || []);
});

router.post('/',  async (req, res) => {
    try{
    const { boby } = req;

    const usuario = await controller.save(Usuario, body);

    res.send(usuario);
    }catch (error){
        res.status(500),send({ error })

    }
});

router.put('/:id', async (req, res) => {
    try{
        const { body } = req;
        const {id} = req.params;

        const usuario = await controller.edit(Usuario, body,  id );

        res.send(boby);

    } catch (error) {
        res.status(500).send({ error });
    }
});

router.delete('/:id',  async (req, res) => {
    try{
      const { id } = req.params;
      
      await controller.remove(Usuario, id);

      res.send({ id })
    } catch (error){
        res.status(500).send({ error });
    }
});

module.exports = router;