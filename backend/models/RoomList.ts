import Room from "./Room";

class RoomList {
    public list: Array<Room>

    constructor() {
        this.list = []
    }

    create(host: string): Room {
        const newRoom = new Room(host)
        this.list.push(newRoom)
        return newRoom
    }

    find(id: string) {
        const room = this.list.find((e) => e.id === id)
        if (room) {
            return room
        }
        return { status: 404 }
    }

    clean() {
        const now = Date.now()
        this.list = this.list.filter((room) => now - room.created < 1000*60*60*24)
    }
}

export default RoomList