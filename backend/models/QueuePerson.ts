class QueuePerson {
    public id: string
    public name: string
    public isCompleted: boolean

    constructor(id: string, name: string) {
        this.id = id
        this.name = name
        this.isCompleted = false
    }

    complete() {
        this.isCompleted = true
    }
}

export default QueuePerson