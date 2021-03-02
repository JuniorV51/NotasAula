const express = require ('express');
const router = express.Router();
//const tags = [
  //  {Notaid: 2, idtag: 1, nome: 'Junior Vendramini'},
   // {Notaid: 1, idtag: 2, nome: 'Fernando sobral'},
//]


router.get('/Notaid?',  (req, res) => {
    res.send([]);
});

router.post('/',  (req, res) => {
    res.send({});
});

router.put('/:Notaid',  (req, res) => {
    res.send({});
});

router.delete('/:Notaid',  (req, res) => {
    res.send({});
});

module.exports = router;