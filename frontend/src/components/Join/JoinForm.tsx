import React, { useState } from 'react'
import { LuUser2 } from "react-icons/lu"
import { joinRoom } from '../../utils/room'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const JoinForm = ({handleFormDone}: {handleFormDone: () => void}) => {

    let { roomid } = useParams()

    const [name, setName] = useState<string>("")
 
    function handleJoinRoom() {
        if (!name) {
            toast("Please fill name")
            return
        }
        joinRoom(roomid || "", name)
        handleFormDone()
    }

    return (
    <div className="flex flex-col w-full h-full justify-center items-center bg-[#FFF3DA] gap-3">
            <div className="w-full flex justify-center px-4 font-bold text-xl text-center">
              Enter your name
            </div>
            <div className="relative w-96">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <LuUser2 className="text-gray-500"/>
                </div>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => {setName(e.target.value.slice(0,50))}} 
                    placeholder="Fill your name..."
                    className={`bg-gray-50 border"border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5`}
                />
            </div>
            <button 
                className="w-24 text-white bg-[#9479f6] hover:bg-[#ab96f6] transition-colors font-medium rounded-lg text-sm px-5 py-2.5 mb-2" 
                onClick={handleJoinRoom}
                >
                Join
            </button>
            <ToastContainer
                position="top-center"
                autoClose={500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
  )
}

export default JoinForm