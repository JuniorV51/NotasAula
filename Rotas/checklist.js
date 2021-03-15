
const express = require ('express');
const router = express.Router();
const controller = require('../controller/checklist');
const { Checklist } = require('../models');
//const chacklists = [
    //{idchec: 1, Notaid: 2, descrição: 'Entrega em um bar no centro de campo mourao', Concluida: 'sim'},
   // {idchec: 2, Notaid: 1, descrição: 'Entrega de produtos de limpeza mercado vendramini', Concluida: 'nao'},
//]


router.get('/idchec?',  async (req, res) => {
    const { idchec } = req.params;


    const checklist =  await controller.getChecklist();
    res.send(checklists || []);
});

router.post('/',  async (req, res) => {
    try{
        const { boby } = req;
    
        const checklist = await controller.save(boby);
    
        res.send(checklist);
        }catch (error){
            res.status(500),send({ error })
    
        }
});

router.put('/:idchec', async (req, res) => {
    try{
        const { body } = req;
        const {idchec} = req.params;

        const checklist = await controller.edit(idchec, body);

        res.send(boby);

    } catch (error) {
        res.status(500).send({ error });
    }
});

router.delete('/:idchec', async (req, res) => {
    try{
        const { idchec } = req.params;
        
        await controller.remove(idchec);
  
        res.send({ idchec })
      } catch (error){
          res.status(500).send({ error });
      }
});

module.exports = router;