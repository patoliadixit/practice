const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json('hi')
})
app.listen(3300, (req, res) => {
  console.log("connected to 3300")
})