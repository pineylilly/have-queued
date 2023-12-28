import { createRoom } from "../../utils/room"
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();

  async function handleCreateRoom() {
    const room = await createRoom()
    console.log(room)
    navigate('/host/' + room.id)
  }

  return (
    <div className="w-screen h-screen bg-[#FFF3DA] flex flex-col justify-center content-center">
      <div className="flex justify-center">
        <button className="px-3 py-2 rounded-lg bg-slate-50 w-fit" onClick={handleCreateRoom}>Create Room</button>
      </div>
        
    </div>
  )
}

export default Home