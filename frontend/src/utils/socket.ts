import { io } from 'socket.io-client';

const URL = process.env.REACT_APP_SOCKET_IO_URL || 'http://localhost:7777';

export const socket = io(URL, { path: process.env.REACT_APP_CLIENT_PATH });