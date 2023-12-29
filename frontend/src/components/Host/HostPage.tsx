import React, { useState } from 'react'
import QRCode from 'react-qr-code';
import { useParams } from 'react-router-dom';
import QueueMemberBox from '../Queue/QueueMemberBox';
import QueueList from '../Queue/QueueList';
import { MdContentCopy, MdOutlineQrCode2 } from "react-icons/md";
import copy from 'copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HostPage = () => {

  const [showMobilePanel, setShowMobilePanel] = useState<boolean>(false)

  let { roomid } = useParams()

  function handleRoomLinkCopy() {
    let isCopy = copy(`${process.env.REACT_APP_PUBLIC_URL}/join/${roomid}` || "");
    if (isCopy) {
        toast("Copied to Clipboard");
    }
}

  return (
    <div className="w-screen h-screen bg-[#FFF3DA] flex justify-center content-center overflow-hidden">
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
                <div className="relative w-[300px]">                        
                  <input 
                    type="text" 
                    value={`${process.env.REACT_APP_PUBLIC_URL}/join/${roomid}`}
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-medium rounded-lg block w-full pe-10 p-2.5 text-center"
                    disabled
                  />
                  <div className="absolute inset-y-0 end-0 flex items-center pe-3">
                      <button className="hover:bg-slate-100 z-10" onClick={handleRoomLinkCopy}>
                          <MdContentCopy className="text-gray-900"/>
                      </button>
                  </div>
                </div>
              </div>
        </div>
        {
            (showMobilePanel) && 
            <div className="absolute flex md:hidden flex-col w-full h-full justify-center items-center bg-[#FFF3DA] gap-3 z-40">
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
                <div className="relative w-[300px]">                        
                  <input 
                    type="text" 
                    value={`${process.env.REACT_APP_PUBLIC_URL}/join/${roomid}`}
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-medium rounded-lg block w-full pe-10 p-2.5 text-center"
                    disabled
                  />
                  <div className="absolute inset-y-0 end-0 flex items-center pe-3">
                      <button className="hover:bg-slate-100 z-10" onClick={handleRoomLinkCopy}>
                          <MdContentCopy className="text-gray-900"/>
                      </button>
                  </div>
                </div>
              </div>
              <button className="flex md:hidden justify-center items-center w-fit h-fit text-white bg-[#9479f6] hover:bg-[#ab96f6] transition-colors font-medium rounded-lg text-sm px-5 py-2.5 mb-2 z-10 gap-1"
              onClick={() => {setShowMobilePanel(false)}}>
                Back
              </button>
            </div>
        }
        
        <div className="relative flex flex-col w-full md:w-2/3 h-full justify-center content-center bg-[#FFF3DA] gap-3">
            <QueueList />
            <button 
              className="absolute bottom-10 left-3 flex md:hidden justify-center items-center w-fit h-fit text-white bg-[#9479f6] hover:bg-[#ab96f6] transition-colors font-medium rounded-lg text-sm px-3 py-2.5 mb-2 z-10 gap-1"
              onClick={() => {setShowMobilePanel(true)}}>
              <MdOutlineQrCode2 className="w-5 h-5" /> Invite
            </button>
        </div>
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

export default HostPage