'use strict';

const express = require('express');
var cors = require('cors')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(cors())
app.get('/', (req, res) => {
  //res.send('Hello World');
  res.json({response: 'This is response from experss docker container'});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);