import { createRoom } from "../../utils/room"
import { useNavigate } from "react-router-dom";
import logoSVG from "../../logo.svg"
import QueueMemberBox from "../Queue/QueueMemberBox";
import HomeQueueAnimation from "./HomeQueueAnimation";


const Home = () => {

  const navigate = useNavigate();

  async function handleCreateRoom() {
    const room = await createRoom()
    console.log(room)
    navigate('/host/' + room.id)
  }

  return (
    <div className="w-screen h-screen bg-[#FFF3DA] flex justify-center content-center overflow-hidden">
      <div className="w-full h-full lg:w-1/2 flex flex-col justify-center items-center gap-5">
        <div className="w-full flex gap-3 items-center justify-center text-center text-4xl font-bold text-[#9479f6]">
          <img src={logoSVG} className="w-10 h-10" />
          HaveQueued
        </div>
        <div className="w-full text-center text-xl font-bold">Easy queue system management</div>
        <button className="w-fit text-white bg-[#9479f6] hover:bg-[#ab96f6] transition-colors font-medium rounded-lg text-sm px-5 py-2.5 mb-2" onClick={handleCreateRoom}>Create Room</button>
        <div className="lg:hidden">
          <HomeQueueAnimation />
        </div>
        
      </div>
      <div className="hidden lg:flex w-1/2 h-full justify-center items-center z-[1]">
        <HomeQueueAnimation />
      </div>
      
        
    </div>
  )
}

export default Home