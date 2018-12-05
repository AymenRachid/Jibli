const express = require('express')
const router = express.Router();

const Demands = require('../models/Demands')
const User = require('../models/User');

router.get('/Demands', function(req, res){
    Demands.find({}, (err, Demands)=>{
        res.json(Demands)
    })
})
router.get('/Demands/:id', (req, res)=>{
    Demands.findById(req.params.id, (err, result)=>{
        res.json(result)
    })
})
router.delete('/demands/:id',(req,res)=>{
    //  console.log(req.paramas.id);
      Demands.findByIdAndRemove({_id: req.params.id}).then(function(demand){
          res.send(demand);
       //   res.send({type:'Demand Deleted'})
      });
    });
router.post('/demands',(req,res)=>{
    var date = new Date();
    var demand = new Demands ({
price: req.body.price,
name: req.body.name,
image: req.body.image,
description: req.body.description,
Date: date.getDate() + '/' + date.getMonth()+ '/' + date.getFullYear(),
})

demand.save(demand, (err, result)=>{
    var id = result._id;
    User.findById(req.body.id, (err, result)=>{
        result.demands.push(id);
        result.save(result, (err, result)=>{
            res.send(result);
        })
    })
})

}) 

module.exports = router