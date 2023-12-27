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
        
    }
}

export default RoomList