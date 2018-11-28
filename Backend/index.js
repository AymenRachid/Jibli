const express = require('express')
const app = express();
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/jibli')
.then((err)=>{
  if(err){
    console.log(err);
  }
})


app.get('/',  (req, res) => {
  res.send('Hello World!')
})

app.get('/jibli', (req,res)=>{
    res.send('This is jibli')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})