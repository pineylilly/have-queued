export interface IQueue {
    id: string,
    host: string,
    queue: string,
    currentQueue: IQueuePerson[],
    created: number
}

export interface IQueuePerson {
    uuid: string,
    name: string,
    status: number
}