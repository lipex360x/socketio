const express = require('express')
const http = require('http')
const cors = require('cors')

const ioServer = require('./socket')

const app = express()
app.use(cors())
const server = http.createServer(app)


const setServer = server.listen(3333, () => {
  console.log('App listen on port 3333') 

  ioServer.openConnection(setServer)
})
