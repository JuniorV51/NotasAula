const express = require ('express');
const router = express.Router();
const controller = require('../controller/tag');
const { Tag } = require('../models');
//const tags = [
  //  {Notaid: 2, idtag: 1, nome: 'Junior Vendramini'},
   // {Notaid: 1, idtag: 2, nome: 'Fernando sobral'},
//]


router.get('/idtag?',  async (req, res) => {
    const { idtag } = req.params;


    const tag =  await controller.gettags();
    res.send(tags || []);
});

router.post('/',  async (req, res) => {
    try{
        const { boby } = req;
    
        const tag = await controller.save(boby);
    
        res.send(tag);
        }catch (error){
            res.status(500),send({ error })
    
        }
});

router.put('/:idtag', async (req, res) => {
    try{
        const { body } = req;
        const {idtag} = req.params;

        const tag = await controller.edit(idtag, body);

        res.send(boby);

    } catch (error) {
        res.status(500).send({ error });
    }
});

router.delete('/:idtag', async (req, res) => {
    try{
        const { idtag } = req.params;
        
        await controller.remove(idtag);
  
        res.send({ idtag })
      } catch (error){
          res.status(500).send({ error });
      }
});

module.exports = router;