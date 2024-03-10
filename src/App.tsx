import './App.css';
import React from 'react';
import ChatMenu from './components/ChatMenu';
import Location from './components/Location';
import Learn from './components/Learn';
import Prompts from './components/Prompts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Flex, Switch } from '@chakra-ui/react';
import Chat from './components/Chat';
import Landing from './components/Landing';
import Navbar from './components/Navbar';



function App() {
  const [messages, setMessages] = React.useState<string[]>([]);
  const [selectedOption, setSelectedOption] = React.useState<'livechat' | 'prompts' | null>(null);

  const handleOptionClick = (option: 'livechat' | 'prompts') => {
    setSelectedOption(option);
  };

  const handleSendMessage = async (message: string) => {
    
    setMessages([...messages, message]);

    console.log("handleSendMessage");
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
      const response = await fetch('http://localhost:8080/bigsister', userInputRequest)
      const data = await response.json()
      return data;

    } catch(err) {
      console.log(err);
    }
  }

  return (
    <Flex // Ensure the container spans the entire viewport height
      justifyContent="center" // Center the child elements horizontally
      alignItems="center" // Center the child elements vertically
    >
        <BrowserRouter>
          <Routes>
            <Route path="/location" element={<Location/>} />
            <Route path="/learn" element={<Learn/>} />
            <Route path="/" element={<ChatMenu onClick={handleOptionClick}/>} />
            {selectedOption === 'livechat' && <Route path="/livechat" element={<Chat onSendMessage={handleSendMessage} />} />}
            {selectedOption === 'prompts' && <Route path="/prompts" element={<Prompts onClick={handleSendMessage} />} />}
          </Routes>
      </BrowserRouter>
      <Landing mgBot="6rem" />
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