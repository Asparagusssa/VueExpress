const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const PORT = 8889

app.use(bodyParser.json());

app.post('/api', (req, res) => {
  console.log(req.body)
  res.status(200).json({ result: req.body.num });
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})