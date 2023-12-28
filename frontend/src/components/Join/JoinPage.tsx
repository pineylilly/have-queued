import React, { useEffect, useState } from 'react'
import { LuUser2 } from "react-icons/lu"
import JoinForm from './JoinForm'
import { getRoom } from '../../utils/room'
import { useNavigate, useParams } from 'react-router-dom'
import { IQueuePerson } from '../../interfaces/queueInterface'
import { getUUID } from '../../utils/uuid'
import JoinStatus from './JoinStatus'

const JoinPage = () => {
    const navigate = useNavigate();

    let { roomid } = useParams()

    const [isFormDone, setFormDone] = useState<boolean>(false)


    function handleFormDone() {
        setFormDone(true)
    }

    useEffect(() => {
        getRoom(roomid || "").then((roomJson) => {
            if (roomJson.status && roomJson.status === 404) {
                navigate('/')
            }
            else if (roomJson.queue.some((e: IQueuePerson) => e.uuid === getUUID())) {
                console.log("You have been joined")
                setFormDone(true)
            }
        })
    }, [])


  return (
    <div className="w-screen h-screen bg-[#FFF3DA] flex justify-center content-center">
        {
            (!isFormDone) ?
                <JoinForm handleFormDone={() => handleFormDone()}/>
            :
                <JoinStatus />
        }
    </div>
  )
}

export default JoinPage