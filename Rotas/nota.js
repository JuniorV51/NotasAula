const express = require ('express');
const router = express.Router();
const controller = require('../controller/nota');
const { Nota } = require('../models');
//const notas = [
    //{Notaid: 1, id: 2, titulo:'Entrega Mercado', descrição:'Entrega de produtos de limpeza mercado vendramini', criadoEM: 26/06/2020, AtualizadoEM: 22/01/2021},
//{Notaid: 2, id: 1, titulo:'Entrega BAR', descrição:'Entrega em um bar no centro de campo mourao', criadoEM: 26/11/2020, AtualizadoEM: 25/02/2021},

//]

router.get('/Notaid?', async (req, res) => {
    const { Notaid } = req.params;


    const nota =  await controller.getNotas();
    res.send(notas || []);
});

router.post('/',  async (req, res) => {
    try{
        const { boby } = req;
    
        const nota = await controller.save(boby);
    
        res.send(nota);
        }catch (error){
            res.status(500),send({ error })
    
        }
});

router.put('/:Notaid',  async (req, res) => {
    try{
        const { body } = req;
        const {Notaid} = req.params;

        const nota = await controller.edit(Notaid, body);

        res.send(boby);

    } catch (error) {
        res.status(500).send({ error });
    }
});

router.delete('/:Notaid',  async (req, res) => {
    try{
        const { Notaid } = req.params;
        
        await controller.remove(Notaid);
  
        res.send({ Notaid })
      } catch (error){
          res.status(500).send({ error });
      }
});

module.exports = router;