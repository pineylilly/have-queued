import React from 'react'

// Status: 0 = Waiting, 1 = In process, 2 = Done
const QueueMemberBox = ({order, name, status}: {order: number, name: string, status: number}) => {
  return (
    <div className="w-96 h-24 px-3 py-3 bg-slate-50 rounded-lg shadow-md flex">
      <div className="text-lg font-bold">#{order}</div>
      <div className="text-lg font-bold">{name}</div>
    </div>
  )
}

export default QueueMemberBox