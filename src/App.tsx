import './App.css';
import React from 'react';
import { Flex } from '@chakra-ui/react';
import Chat from './components/Chat';
import Landing from './components/Landing';
import Location from './components/Location';
import Forum from './components/Forum';
import Navbar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Flex // Ensure the container spans the entire viewport height
        justifyContent="center" // Center the child elements horizontally
        alignItems="center" // Center the child elements vertically
      >
        <Routes>
          <Route path="/" element={<Landing mgBot="6rem" />} />
          <Route path="/location" element={<Location />} />
          <Route path="/community" element={<Forum />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <Navbar />
      </Flex>
    </BrowserRouter>
  );
}

export default App;
