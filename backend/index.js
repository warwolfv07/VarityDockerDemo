const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 3030

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/dbcheck", (req, res) => {
  try {
    mongoose.connect('mongodb://127.0.0.1:27017/test');
  }
  catch(err) {
    res.send(`Not connected to DB ${err}`);
  }
  res.send("Successfully connected to DB");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
