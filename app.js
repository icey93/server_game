const express = require('express')
const app = express()
app.listen(80)

app.get('/', (req, res, next) => {
  res.end('index')
})

app.get('/user', (req, res, next)=> {
  res.end('user')
})
