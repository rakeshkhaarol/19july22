//console.log('newnew');

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
});


app.post('/hello', function (req, res) {
    res.json({"Message":"Hello World again"})
  });
app.listen(3000)