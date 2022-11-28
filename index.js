const express = require('express')
const db = require('./db')

const server = express()

server.get('/', async (req, res) => {
  const data = await db('example').select('*')
  res.json(data)
})

const port = process.env.PORT || 3000
server.listen(port)
console.log(`Listening on ${port}\n`)
