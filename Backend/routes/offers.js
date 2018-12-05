const express = require('express')
const router = express.Router();

const offers = require('../models/offers');
const User = require('../models/User');

router.get('/offers', function(req, res){
    offers.find({}, (err, offers)=>{
        res.json(offers)
    })
})
router.get('/offers/:id', (req, res)=>{
    offers.findById(req.params.id, (err, result)=>{
        res.json(result)
    })
})
router.delete('/offers/:id',(req,res)=>{
    res.send({type:'Offer Deleted'})
})
router.post('/offers', (req,res)=>{
    var date = new Date();
       var offer = new offers({
        price: req.body.price,
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        Date: date.getDate() + '/' + date.getMonth()+ '/' + date.getFullYear(),
    })
    offer.save(offer, (err, result)=>{
        var id = result._id;
        User.findById(req.body.id, (err, result)=>{
            result.offers.push(id);
            result.save(result, (err, result)=>{
                res.send(result);
            })
        })
    })
   
})

module.exports = router