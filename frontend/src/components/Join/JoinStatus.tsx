import React, { useEffect } from 'react'
import { socket } from '../../utils/socket'
import { useParams } from 'react-router-dom'

const JoinStatus = () => {

    let { roomid } = useParams()

    useEffect(() => {
        
    }, [])

  return (
    <div className="flex flex-col w-full h-full justify-center items-center bg-[#FFF3DA] gap-3">
        <div className="w-full flex justify-center px-4 font-bold text-xl text-center">
            You are in queue #
        </div>
    </div>
  )
}

export default JoinStatus