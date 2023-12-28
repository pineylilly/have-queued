import React from 'react'
import QRCode from 'react-qr-code';
import { useParams } from 'react-router-dom';
import QueueMemberBox from '../Queue/QueueMemberBox';
import QueueList from '../Queue/QueueList';

const HostPage = () => {

  let { roomid } = useParams()

  return (
    <div className="w-screen h-screen bg-[#FFF3DA] flex justify-center content-center">
        <div className="hidden md:flex flex-col w-1/3 h-full justify-center bg-[#FFF3DA] gap-3">
            <div className="w-full flex justify-center px-4 font-bold text-xl text-center">
              Scan QR code to join
            </div>
            <div className="w-full flex justify-center px-3">
              <QRCode value={`${process.env.REACT_APP_PUBLIC_URL}/join/${roomid}`} bgColor='#FFF3DA' />
            </div>
            <div className="w-full flex justify-center px-4 font-bold text-xl text-center">
              or send this link to participants
            </div>
            <div className="w-full flex justify-center px-4 font-bold text-xl text-center">
              {`${process.env.REACT_APP_PUBLIC_URL}/join/${roomid}`}
            </div>
        </div>
        <div className="flex flex-col w-full md:w-2/3 h-full justify-center content-center bg-[#FFF3DA] gap-3">
            <QueueList />
        </div>
    </div>
  )
}

export default HostPage