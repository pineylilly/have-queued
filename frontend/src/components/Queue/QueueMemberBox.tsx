import React from 'react'

// Status: 0 = Waiting, 1 = In process, 2 = Done
const QueueMemberBox = ({order, name, status}: {order: number, name: string, status: number}) => {

  const statusCSS = 
    (status === 0) ? "bg-slate-50 border-1 border-slate-4"
    : (status === 1) ? "bg-[#DFCCFB] ring-2 ring-[#D0BFFF]"
    : "bg-slate-300"

  return (
    <div id={"queue" + order} className={`relative w-80 md:w-96 h-24 px-3 py-3 rounded-lg shadow-sm flex flex-col flex-shrink-0 snap-center ${statusCSS}`}>
      <div className="text-lg font-bold">#{order}</div>
      <div className="text-lg font-bold truncate"> {name}</div>
      <div className="absolute flex items-center left-[50%] top-3 text-lg font-bold gap-2">
        <span className="relative flex h-3 w-3">
          <span 
            className={`inline-flex h-full w-full rounded-full opacity-75`}
            style={{backgroundColor: (status === 0) ? "#f59e0b" : (status === 1) ? "#6366f1" : "#84cc16"}}
          ></span>
        </span>
        <span className="text-sm">
          {(status === 0) ? "Waiting" : (status === 1) ? "Current Queue" : "Finished"}
        </span>
      </div>
    </div>
  )
}

export default QueueMemberBox