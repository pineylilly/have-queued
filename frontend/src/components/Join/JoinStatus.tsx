import React, { useEffect, useRef, useState } from 'react'
import { socket } from '../../utils/socket'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { IQueue, IQueuePerson } from '../../interfaces/queueInterface'
import { getRoom } from '../../utils/room'
import { getUUID } from '../../utils/uuid'
import { LuUser2 } from 'react-icons/lu'

const JoinStatus = () => {

    let { roomid } = useParams()

    const navigate = useNavigate();

    const initDataRef = useRef(false)

    const [queue, setQueue] = useState<IQueuePerson[]>([])
    const [currentQueue, setCurrentQueue] = useState<number>(-1)
    const [ownQueue, setOwnQueue] = useState<number>(-2)

    const [name, setName] = useState<string>("")

    function updateRoom(room: IQueue) {
      setQueue(room.queue)
      setCurrentQueue(room.currentQueue)
      setOwnQueue(room.queue.findIndex((e) => e.uuid === getUUID()))
    }

    // Init render
    useEffect(() => {
      // if (initDataRef.current === true) {
      //     return
      // }
      // initDataRef.current = true
      getRoom(roomid || "").then((roomJson: any) => {
          if (roomJson.status && roomJson.status === 404) {
              navigate('/')
          }
          else {
              updateRoom(roomJson as IQueue)
              setName((roomJson as IQueue).queue.find((e) => e.uuid === getUUID())?.name || "")
          }
      })
    }, [])

    // Socket.io connection
    useEffect(() => {
      socket.on(`room${roomid}:update`, (room: IQueue) => updateRoom(room))
    }, [])


  return (
    <div className="flex flex-col w-full h-full justify-center items-center bg-[#FFF3DA] gap-4">
        {
          (currentQueue <= ownQueue) && <>
            <div className="w-96 flex justify-center items-center font-bold text-xl text-center">
              Welcome, {name}
            </div>
          
            <div className="w-full flex justify-center px-4 font-bold text-xl text-center mb-3">
                You are in queue&nbsp;<span className="text-[#9479f6]">#{ownQueue + 1}</span>&nbsp;out of {queue.length}
            </div>
            <div className="relative w-96 h-4 mb-4 bg-slate-300 rounded-full ">
              <div 
                className="h-4 bg-gradient-to-r from-[#D0BFFF] to-[#BEADFA] rounded-full transition-all" 
                style={{width: (queue.length > 0) ? `${(currentQueue + 1)*100/(ownQueue + 1)}%` : "0%"}}>
              </div>
              <div 
                className="absolute top-5 -translate-x-1/2 transition-all font-semibold text-[#9479f6]"
                style={{left: (queue.length > 0) ? `${(currentQueue + 1)*100/(ownQueue + 1)}%` : "0%"}}>
                {currentQueue + 1}
              </div>
              <div 
                className="absolute right-0 -top-6 font-semibold text-[#9479f6]">
                You: #{ownQueue + 1}
              </div>
            </div>
            {
              (currentQueue === ownQueue) ? 
              <div className="w-full flex justify-center px-4 font-bold text-xl text-center">
                It's your turn!
              </div>
              :
              <div className="w-full flex justify-center px-4 font-bold text-xl text-center">
                {ownQueue - currentQueue} queue{(ownQueue - currentQueue > 1) && "s"} left before you
              </div>
            }
            
          </>
        }
        {
          (currentQueue > ownQueue) && <>
            <div className="w-full flex justify-center px-4 font-bold text-xl text-center">
              You are done!
            </div>
            <div className="w-full flex justify-center px-4 font-bold text-xl text-center">
              Thank you for participating
            </div>
          </>
        }
        
    </div>
  )
}

export default JoinStatus