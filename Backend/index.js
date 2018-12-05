const express = require('express')
const app = express();
const mongoose = require('mongoose')
const user = require('./routes/User');
const offers = require('./routes/offers');
const demands = require('./routes/Demands');
const bodyParser = require('body-parser')


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/jibli')
.then((err)=>{
  if(err){
    console.log(err);
  }
})
app.use(bodyParser.json())

app.use('/api', user);
app.use('/api', offers);
app.use('/api', demands);


app.get('/',  (req, res) => {
  res.send('Hello World!')
})

app.get('/jibli', (req,res)=>{
    res.send('This is jibli')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})