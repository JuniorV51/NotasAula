
const express = require ('express');
const router = express.Router();
const controller = require('../controller/default');
const { Checklist } = require('../models');
//const chacklists = [
    //{idchec: 1, Notaid: 2, descrição: 'Entrega em um bar no centro de campo mourao', Concluida: 'sim'},
   // {idchec: 2, Notaid: 1, descrição: 'Entrega de produtos de limpeza mercado vendramini', Concluida: 'nao'},
//]


router.get('/:id?',  async (req, res) => {
    const { id } = req.params;


     const checklist =  id ? await controller.getById(Checklist, id) : await controller.getAll(Checklist);

    res.send(checklist || []);
});

router.post('/',  async (req, res) => {
    try{
        const { body } = req;
    
        const checklist = await controller.save(Checklist, body);
    
        res.send(checklist);
        }catch (error){
            res.status(500),send({ error })
    
        }
});

router.put('/:id', async (req, res) => {
    try{
        const { body } = req;
        const {id} = req.params;

        const checklist = await controller.edit(Checklist, body, id);

        res.send(boby);

    } catch (error) {
        res.status(500).send({ error });
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const { id } = req.params;
        
        await controller.remove(Checklist, id);
  
        res.send({ id })
      } catch (error){
          res.status(500).send({ error });
      }
});

module.exports = router;