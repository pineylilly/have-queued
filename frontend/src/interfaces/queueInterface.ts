export interface IQueue {
    id: string,
    host: string,
    queue: IQueuePerson[],
    currentQueue: number,
    created: number
}

export interface IQueuePerson {
    uuid: string,
    name: string,
    status: number
}