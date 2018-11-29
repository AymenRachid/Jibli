const express = require('express')
const router = express.Router();

const User = require('../models/User')

router.get('/login', function(req, res){
    User.find({}, (err, User)=>{
        res.json(User)
    })
})
router.get('/User/:id', (req, res)=>{
    User.findById(req.params.id, (err, result)=>{
        res.json(result)
    })
})