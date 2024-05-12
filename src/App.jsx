import { useState } from 'react'
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './Component/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
     <Routes>
        <Route exact path="/" element={<Home/>}/>
     </Routes>
    </Router>
    </>
  )
}

export default App
