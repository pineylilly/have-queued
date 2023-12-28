import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import QueueMemberBox from './QueueMemberBox'
import { getRoom } from '../../utils/room'
import { getUUID } from '../../utils/uuid';
import { IQueue, IQueuePerson } from '../../interfaces/queueInterface';
import { socket } from '../../utils/socket';

const QueueList = () => {
    
    let { roomid } = useParams()

    const navigate = useNavigate();

    const [queue, setQueue] = useState<IQueuePerson[]>([])


    function updateRoom(room: IQueue) {
        setQueue(room.queue)
    }

    // Init render
    useEffect(() => {
        getRoom(roomid || "").then((roomJson) => {
            if (roomJson.status && roomJson.status === 404) {
                navigate('/')
            }
            else if (roomJson.host !== getUUID()) {
                navigate('/')
            }
            else {
                updateRoom(roomJson as IQueue)
            }
        })
    }, [])

    // socket.io connection
    useEffect(() => {
        socket.on('connection', () => console.log('socket connected'))
        socket.on(`room${roomid}:update`, (room: IQueue) => updateRoom(room))
    }, [])

  return (
    <div className="w-full h-full flex flex-col gap-3 justify-center items-center">
        {
            queue.map((q, idx) => {
                return <QueueMemberBox key={idx} order={idx+1} name={q.name} status={q.status} />
            })
        }
    </div>
  )
}

export default QueueList