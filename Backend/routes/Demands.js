const express = require('express')
const router = express.Router();

const Demands = require('../models/Demands')

router.get('/Demands', function(req, res){
    offers.find({}, (err, Demands)=>{
        res.json(Demands)
    })
})
router.get('/Demands/:id', (req, res)=>{
    Demands.findById(req.params.id, (err, result)=>{
        res.json(result)
    })
})

module.exports = router