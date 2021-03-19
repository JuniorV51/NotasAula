const express = require ('express');
const router = express.Router();
const controller = require('../controller/default');
const { Nota } = require('../models');
//const notas = [
    //{Notaid: 1, id: 2, titulo:'Entrega Mercado', descrição:'Entrega de produtos de limpeza mercado vendramini', criadoEM: 26/06/2020, AtualizadoEM: 22/01/2021},
//{Notaid: 2, id: 1, titulo:'Entrega BAR', descrição:'Entrega em um bar no centro de campo mourao', criadoEM: 26/11/2020, AtualizadoEM: 25/02/2021},

//]

router.get('/id?', async (req, res) => {
    const { id } = req.params;


    const nota =  id ? await controller.getById(Nota, id) : await controller.getAll(Nota);
    res.send(notas || []);
});

router.post('/',  async (req, res) => {
    try{
        const { boby } = req;
    
        const nota = await controller.save(Nota, boby);
    
        res.send(nota);
        }catch (error){
            res.status(500),send({ error })
    
        }
});

router.put('/:id',  async (req, res) => {
    try{
        const { body } = req;
        const {id} = req.params;

        const nota = await controller.edit(Nota, body, id);

        res.send(boby);

    } catch (error) {
        res.status(500).send({ error });
    }
});

router.delete('/:id',  async (req, res) => {
    try{
        const { id } = req.params;
        
        await controller.remove(Nota, id);
  
        res.send({ id })
      } catch (error){
          res.status(500).send({ error });
      }
});

module.exports = router;