import QueuePerson from "./QueuePerson"
import { generateID } from "../libs/idGenerator"

class Room {
    public id: string
    public host: string
    public queue: QueuePerson[]
    public currentQueue: number
    public created: number

    constructor(host: string) {
        this.id = generateID()
        this.host = host
        this.queue = []
        this.currentQueue = -1
        this.created = Date.now()
    }

    getQueueSize(): number {
        return this.queue.length
    }

    addQueue(queue: QueuePerson): void {
        this.queue.push(queue)
    }

}

export default Room