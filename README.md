# HaveQueued - Easy Queue Management System

> [!NOTE]
> There is currently no website for this project because I cannot find provider that can host both REST API and socket.io for backend.

Queue management system for scheduling presentations, or sending assignments, or something else. This projects use React/Typescript for frontend and express/socket.io for backend.

![image](https://github.com/creampiney/have-queued/assets/58902996/ca1db6d9-2e68-4c3b-9c38-1508f060094c)

## Features

- User can create room for queue, user who create room will be owner.

![image](https://github.com/creampiney/have-queued/assets/58902996/ba1275c6-d75a-4190-80fa-84863dcec4f7)

- Participants can join the room by scanning QR code from owner's window or invitation link sent by owner.
- Participants must enter their name to join room.

![image](https://github.com/creampiney/have-queued/assets/58902996/676647e1-3d9d-4161-a540-59417f0694f1)

- Participants can see progress of queue from progress bar.

![image](https://github.com/creampiney/have-queued/assets/58902996/31dacc9d-883b-4faf-a91b-f6bfa9d9242d)

- Room's owner can view queue in the room. Also, owner can press "Next" to call next queue or "Undo" to undo the queue.

![image](https://github.com/creampiney/have-queued/assets/58902996/65796db2-13d4-4111-8ca7-997d3bf61ee3)

- The room will be deleted 1 day after created.

## Tech Used

- Language: Typescript (both frontend and backend)
- Frontend: React
- Styling: Tailwind CSS
- Backend: Node.js (express.js and socket.io)
