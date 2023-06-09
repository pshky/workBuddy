const express = require('express')
const cors = require('cors')
const dbConnect = require('./connection/dbConnect')

const app = express()

// Create the http server
const server = require('http').createServer(app);
require('dotenv').config()
const port = process.env.PORT 
dbConnect()
app.use(express.json({limit:'50mb'}))

app.use(cors())

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})