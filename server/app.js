/* eslint-disable prettier/prettier */
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const url =
  'mongodb+srv://comehometeam:comehometeam@cluster0.cxqi4.mongodb.net/ComeHome?retryWrites=true&w=majority';
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('src/public'));

mongoose
  .connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('connect successfully'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  return res.send('Hello from Node js');
});

app.post('/', (req, res) => {
  return res.send(req.body);
});
app.listen(process.env.PORT || 3000, () =>
  console.log('App listening on port 3000'),
);
