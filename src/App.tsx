import './App.css';
import React from 'react';
import { Flex } from '@chakra-ui/react';
import Chat from './components/Chat';
import Landing from './components/Landing';
import Location from './components/Location';
import Learn from './components/Learn';
import Navbar from './components/NavBar';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Flex // Ensure the container spans the entire viewport height
      justifyContent="center" // Center the child elements horizontally
      alignItems="center" // Center the child elements vertically
    >
      <Landing />
      <Navbar />
    </Flex>

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
