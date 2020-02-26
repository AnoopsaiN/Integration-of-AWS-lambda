const express = require('express')
const axios = require('axios')
const cors =require('cors')
var events = require('events');
var eventEmitter = new events.EventEmitter();

const app = express()
const port = 3000


app.use(cors())

app.get('/', (req, res) => {
  const data = axios.get('https://2uexriexp6.execute-api.us-east-2.amazonaws.com/abc')
  .then((res) => {
    res.send(res.data);
  });
});

//res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`));