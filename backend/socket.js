const socketio = require('socket.io')

module.exports = {
  openConnection(server) {
    const io = socketio(server, {
      cors: {
        origin: '*',
      }
    });

    io.on('connection', client => {
      console.log('connected')
      client.emit('hello', `Hello from Backend ${new Date().getTime()}`)

      client.on('front', message => {
        console.log(message)
      })

      client.on('disconnect', () => {
        console.log('disconnected')
      })

    })

  }
}