import { io } from 'socket.io-client';

const URL = process.env.REACT_APP_BACKEND_ENDPOINT || 'http://localhost:7777';

export const socket = io(URL);