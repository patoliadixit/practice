const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json('hi')
})
app.listen(1000)