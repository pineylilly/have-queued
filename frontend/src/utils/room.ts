import { getUUID } from "./uuid";

export async function createRoom() {
    const room = await fetch(process.env.REACT_APP_BACKEND_ENDPOINT + 'rooms/create', {
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
    return room.json()
}