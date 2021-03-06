const express = require ('express');
const router = express.Router();
const controller = require('../controller/default');
const { Tag } = require('../models');
//const tags = [
  //  {Notaid: 2, idtag: 1, nome: 'Junior Vendramini'},
   // {Notaid: 1, idtag: 2, nome: 'Fernando sobral'},
//]


router.get('/:id?',  async (req, res) => {
    const { id } = req.params;


    const tag =  id ? await controller.getById(Tag, id) : await controller.getAll(Tag);
    res.send(tag || []);
});

router.post('/',  async (req, res) => {
    try{
        const { body } = req;
    
        const tag = await controller.save(Tag, body);
    
        res.send(tag);
        }catch (error){
            res.status(500),send({ error })
    
        }
});

router.put('/:id', async (req, res) => {
    try{
        const { body } = req;
        const {id} = req.params;

        const tag = await controller.edit(Tag, body, id);

        res.send(boby);

    } catch (error) {
        res.status(500).send({ error });
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const { id } = req.params;
        
        await controller.remove(Tag, id);
  
        res.send({ id })
      } catch (error){
          res.status(500).send({ error });
      }
});

module.exports = router;