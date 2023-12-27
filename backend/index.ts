import express, { urlencoded, json } from 'express'
import Room from './models/Room'
import RoomList from './models/RoomList'

var app = express()

var port = process.env.PORT || 7777

app.use(urlencoded({extended: true}))
app.use(json())

const roomList: RoomList = new RoomList()

app.get('/', function (req, res) {
    res.send('There is nothing')
})

app.post('/rooms/create', function (req, res) {
    console.log("created room")
    const newRoom = roomList.create("abc")
    console.log(newRoom)
    res.send(newRoom)
})
  
app.get('/rooms', function (req, res) {
    res.send(roomList)
})

app.get('/room/:id', function (req, res) {
    res.send(req.params.id)
})
  
app.listen(port, function () {
    console.log('Starting node.js on port ' + port)
})