const path = require('path')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectory = path.join(__dirname, '../public')

app.use(express.static(publicDirectory))

let count = 0

io.on('connection', (socket) => {
    console.log('New Connection Establish with client ')

    socket.emit('countUpdate', count)

    socket.on('increment', () => {
        count++
        io.emit('countUpdate', count)
    })
})

server.listen(port, () => {
    console.log(`Server is up on ${port}`)
})