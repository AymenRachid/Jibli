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
router.post('/offers', (req,res)=>{
    var offer = new offers({
        price: req.body.price,
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
    })
    offer.save(offer, (result, err)=>{
        var id = result._id;
        User.findById(req.body.id, (result, err)=>{
            result.offers.push(id);
        })
    })
   
})