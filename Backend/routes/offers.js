const express = require('express')
const router = express.Router();

const offers = require('../models/offers')

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