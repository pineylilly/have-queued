import React from 'react'
import QueueMemberBox from '../Queue/QueueMemberBox'

const HomeQueueAnimation = () => {
  return (
    <div className="relative block w-96 h-[160px] animate-float">
        <div className="absolute top-0 left-[calc(50%+16px)] -translate-x-1/2">
          <QueueMemberBox order={8} name={"Bing Chilling"} status={0} />
        </div>
        <div className="absolute top-8 left-[calc(50%)] -translate-x-1/2">
          <QueueMemberBox order={7} name={"Bing Chilling"} status={0} />
        </div>
        <div className="absolute top-16 left-[calc(50%-16px)] -translate-x-1/2 z-[1]">
          <QueueMemberBox order={6} name={"Bing Chilling"} status={1} />
        </div>
    </div>
  )
}

export default HomeQueueAnimation