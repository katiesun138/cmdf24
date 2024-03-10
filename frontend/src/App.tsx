import './App.css';
import React from 'react';
import ChatMenu from './components/ChatMenu';
import Prompts from './components/Prompts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import Chat from './components/Chat';
import Landing from './components/Landing';
import Location from './components/Location';
import Forum from './components/Forum';
import Navbar from './components/Navbar';

function App() {
  const [messages, setMessages] = React.useState<string[]>([]);
  const [selectedOption, setSelectedOption] = React.useState<'livechat' | 'prompts' | null>(null);

  const handleOptionClick = (option: 'livechat' | 'prompts') => {
    setSelectedOption(option);
  };

  const handleSendMessage = async (message: string) => {
    setMessages([...messages, message]);

    console.log('handleSendMessage');
    const userInputRequest = {
      method: 'POST',
      mode: 'cors' as RequestMode,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userInput: message,
      }),
    };

    console.log(userInputRequest);

    try {
      const response = await fetch('http://localhost:8080/bigsister', userInputRequest);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

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
          <Route path="/chat" element={<ChatMenu onClick={handleOptionClick} />} />
          {selectedOption === 'livechat' && <Route path="/livechat" element={<Chat onSendMessage={handleSendMessage} />} />}
          {selectedOption === 'prompts' && <Route path="/prompts" element={<Prompts onClick={handleSendMessage} />} />}
        </Routes>
        <Navbar />
      </Flex>
    </BrowserRouter>
  );
}

export default App;
