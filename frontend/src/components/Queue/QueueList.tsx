import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import QueueMemberBox from './QueueMemberBox'
import { getRoom } from '../../utils/room'
import { getUUID } from '../../utils/uuid';
import { IQueue, IQueuePerson } from '../../interfaces/queueInterface';
import { socket } from '../../utils/socket';

const QueueList = () => {
    
    let { roomid } = useParams()

    const initDataRef = useRef(false)

    const navigate = useNavigate();

    const [queue, setQueue] = useState<IQueuePerson[]>([])
    const [currentQueue, setCurrentQueue] = useState<number>(-1)


    function updateRoom(room: IQueue) {
        setQueue(room.queue)
        setCurrentQueue(room.currentQueue)
    }

    function nextQueue() {
        const element = document.getElementById("queue" + (currentQueue+1 + 1));
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "center"});
        }
        setCurrentQueue(currentQueue + 1)
        socket.emit('room:currentQueueUpdate', roomid, 1)
        
    }

    function undoQueue() {
        const element = document.getElementById("queue" + (currentQueue+1 - 1));
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "center"});
        }
        setCurrentQueue(currentQueue - 1)
        socket.emit('room:currentQueueUpdate', roomid, -1)
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
    <div className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden px-4">
        <div className="w-full h-full overflow-auto invisible-scroll scroll-smooth">
            <div className="w-full flex flex-col justify-center items-center flex-nowrap gap-3 snap-y snap-mandatory py-[calc(50vh-48px)]">
                {
                    (queue.length > 0) ?
                    queue.map((q, idx) => {
                        return <QueueMemberBox key={idx} order={idx+1} name={q.name} status={(currentQueue < idx) ? 0 : (currentQueue === idx) ? 1 : 2} />
                    })
                    : <div className="w-full flex justify-center items-center text-lg font-bold">The queue is empty...</div>
                }
            </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FFF3DA] from-30% z-10 flex justify-center items-center gap-8">
            {
                (currentQueue >= 0) ?
                <button 
                    className="w-24 h-fit text-white bg-[#9479f6] hover:bg-[#ab96f6] transition-colors font-medium rounded-lg text-sm px-5 py-2.5 mb-2" 
                    onClick={undoQueue}
                    >
                    Undo
                </button>
                : <button 
                    className="w-24 h-fit text-white bg-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2" 
                    disabled={true}
                    >
                    Undo
                </button>
            }
            {
                (currentQueue < queue.length && queue.length > 0) ?
                <button 
                    className="w-24 h-fit text-white bg-[#9479f6] hover:bg-[#ab96f6] transition-colors font-medium rounded-lg text-sm px-5 py-2.5 mb-2" 
                    onClick={nextQueue}
                    >
                    {(currentQueue === -1) ? "Start" : "Next"}
                </button>
                : <button 
                    className="w-24 h-fit text-white bg-slate-300 transition-colors font-medium rounded-lg text-sm px-5 py-2.5 mb-2" 
                    disabled={true}
                    >
                    {(currentQueue === -1) ? "Start" : "Next"}
                </button>
            }
            
        </div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FFF3DA] from-30% z-10 flex justify-center items-center gap-8">
            <div className="absolute top-4 left-4 text-lg font-semibold">
                Total Queue: {queue.length}
            </div>
            <div className="absolute top-4 right-4 text-lg font-semibold">
                Current Queue: <span className="text-[#9479f6]">{(currentQueue === -1) ? "Not started" : (currentQueue >= queue.length) ? "Finished" : "#" + (currentQueue + 1)}</span>
            </div>
        </div>

     
        
        
    </div>
  )
}

export default QueueList