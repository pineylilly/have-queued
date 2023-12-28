import { getUUID } from "./uuid";

export async function createRoom() {
    const room = await fetch(process.env.REACT_APP_BACKEND_ENDPOINT + '/rooms/create', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            host: getUUID()
        })
    })
    return await room.json()
}

export async function getRoom(id: string) {
    const room = await fetch(process.env.REACT_APP_BACKEND_ENDPOINT + '/rooms/' + id)
    return await room.json()
}

export async function joinRoom(roomid: string, name: string) {
    const status = await fetch(process.env.REACT_APP_BACKEND_ENDPOINT + '/rooms/' + roomid + '/queue/add', {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uuid: getUUID(),
            name: name
        })
    })
    return await status.json()
}