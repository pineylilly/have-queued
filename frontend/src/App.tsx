import React, { useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';

import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { generateUUID } from './utils/uuid';

function App() {

  useEffect(() => {
    const userUUID = localStorage.getItem('uuid')
    if (!userUUID) {
      generateUUID()
    }
  }, [])

  return (
    <Home />
  );
}



export default App;
