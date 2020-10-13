const express = require('express')
const app = express()
const readFile = require('./utils/readFile')
const indexHtmlPath = '/web/game/server_client/dist/index.html'
app.get('/page', (req, res, next) => {
  readFile.readBinary(indexHtmlPath, res)
})

app.get('/user', (req, res, next)=> {
  res.end('user')
})

app.listen(8080)
