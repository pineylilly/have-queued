import React, { useEffect, useRef, useState } from 'react'
import { socket } from '../../utils/socket'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { IQueue, IQueuePerson } from '../../interfaces/queueInterface'
import { getRoom } from '../../utils/room'
import { getUUID } from '../../utils/uuid'

const JoinStatus = () => {

    let { roomid } = useParams()

    const navigate = useNavigate();

    const initDataRef = useRef(false)

    const [queue, setQueue] = useState<IQueuePerson[]>([])
    const [currentQueue, setCurrentQueue] = useState<number>(-1)
    const [ownQueue, setOwnQueue] = useState<number>(-2)

    function updateRoom(room: IQueue) {
      setQueue(room.queue)
      setCurrentQueue(room.currentQueue)
      setOwnQueue(room.queue.findIndex((e) => e.uuid === getUUID()))
  }

    // Init render
    useEffect(() => {
      if (initDataRef.current === true) {
          return
      }
      initDataRef.current = true
      getRoom(roomid || "").then((roomJson) => {
          if (roomJson.status && roomJson.status === 404) {
              navigate('/')
          }
          else {
              updateRoom(roomJson as IQueue)
          }
      })
    }, [])

    // Socket.io connection
    useEffect(() => {
      socket.on(`room${roomid}:update`, (room: IQueue) => updateRoom(room))
    }, [])

  return (
    <div className="flex flex-col w-full h-full justify-center items-center bg-[#FFF3DA] gap-3">
        {
          (currentQueue <= ownQueue) && <>
            <div className="w-full flex justify-center px-4 font-bold text-xl text-center">
                You are in queue <span className="text-[#9479f6]"> #{ownQueue + 1} </span> out of {queue.length}
            </div>
            <div className="w-full flex justify-center px-4 font-bold text-xl text-center">
                Current Queue: #{currentQueue + 1}
            </div>
          </>
        }
        
    </div>
  )
}

export default JoinStatus