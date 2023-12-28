class QueuePerson {
    public uuid: string
    public name: string
    public status: number

    constructor(uuid: string, name: string) {
        this.uuid = uuid
        this.name = name
        this.status = 0
    }

    inQueue() {
        this.status = 1
    }

    complete() {
        this.status = 2
    }
}

export default QueuePerson