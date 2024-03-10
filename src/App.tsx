import './App.css';
import React from 'react';
import Chat from './components/Chat';
import Landing from './components/Landing';
import Location from './components/Location';
import Learn from './components/Learn';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Landing />
    // <BrowserRouter>
    //   <Routes>
    //<Route path="/landing" element={<Landing />} />
    //     <Route path="/location" element={<Location />} />
    //     <Route path="/learn" element={<Learn />} />
    //     <Route path="/" element={<Chat />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
