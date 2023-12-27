import express, { urlencoded, json } from 'express'
import Room from './models/Room'
import RoomList from './models/RoomList'
import cors from 'cors'


var app = express()

var port = process.env.PORT || 7777

app.use(urlencoded({extended: true}))
app.use(json())

app.use(cors())

const roomList: RoomList = new RoomList()

app.get('/', function (req, res) {
    res.send('There is nothing')
})

app.post('/rooms/create', function (req, res) {
    const body = req.body
    const newRoom = roomList.create(body.host)
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