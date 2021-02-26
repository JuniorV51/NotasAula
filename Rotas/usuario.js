const express = require ('express');
const router = express.Router();

router.get('/', function (req, res)  {
   
    res.json([
        {Nome: "Junior Vendrami", Email: 'junior_vendra@hotmail.com'}

    ]);
})

router.post('/');
router.put('/');
router.deleter('/');

module.exports = router;