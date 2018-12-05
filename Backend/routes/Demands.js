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
router.post('demands',(req,res)=>{
var demand = new demand ({
price: req.body.price,
name: req.body.name,
image: req.body.image,
date: date.now,

description: req.body.description,
})
offer.save(demand, (result,err)=>{
var id = result_id;
User.findById(req.body.id, (result,err)=>{
result.demands.push(id);
result.save(result, (err, result)=>{
    res.send(result);
})

})
}) 
})
module.exports = router