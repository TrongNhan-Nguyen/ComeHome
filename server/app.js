/* eslint-disable prettier/prettier */
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('src/public'));

app.get('/', (req, res) => {
  return res.send('Hello from Node js');
});

app.post('/',(req,res)=>{
    return res.send(req.body);
});
app.listen(process.env.PORT || 3000, () =>
  console.log('App listening on port 3000'),
);
