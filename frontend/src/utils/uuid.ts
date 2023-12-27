import {v4 as uuidv4} from 'uuid';

export function getUUID() {
    let uuid = localStorage.getItem('uuid')
    if (!uuid) {        
      uuid = generateUUID()
    }
    return uuid
}

export function generateUUID() {
    let uuid = uuidv4()
    localStorage.setItem('uuid', uuid)
    return uuid
}

