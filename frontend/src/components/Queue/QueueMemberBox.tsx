import React from 'react'

// Status: 0 = Waiting, 1 = In process, 2 = Done
const QueueMemberBox = ({order, name, status}: {order: number, name: string, status: number}) => {

  const statusCSS = 
    (status === 0) ? "bg-slate-50 border-1 border-slate-4"
    : (status === 1) ? "bg-[#DFCCFB] ring-2 ring-[#D0BFFF]"
    : "bg-slate-300"

  return (
    <div className={`w-96 h-24 px-3 py-3 rounded-lg shadow-sm flex flex-shrink-0 snap-center ${statusCSS}`}>
      <div className="text-lg font-bold">#{order}</div>
      <div className="text-lg font-bold"> {name}</div>
    </div>
  )
}

export default QueueMemberBox