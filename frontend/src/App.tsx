import React, { useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';

import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { generateUUID } from './utils/uuid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HostPage from './components/Host/HostPage';
import JoinPage from './components/Join/JoinPage';

function App() {

  useEffect(() => {
    const userUUID = localStorage.getItem('uuid')
    if (!userUUID) {
      generateUUID()
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/host/:roomid' element={<HostPage />} />
        <Route path='/join/:roomid' element={<JoinPage />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  );
}



export default App;
