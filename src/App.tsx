import './App.css';
import React from 'react';
import Chat from './components/Chat';
import Location from './components/Location';
import Learn from './components/Learn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Switch } from '@chakra-ui/react';


function App() {
  const [messages, setMessages] = React.useState<string[]>([]);

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

    // console.log(userInputRequest);

    try {
      const response = await fetch('http://localhost:8080/bigsister', userInputRequest)
      const data = await response.json()
      console.log(data)

    } catch(err) {
      console.log(err);
    }
  }

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/location" element={<Location/>} />
          <Route path="/learn" element={<Learn/>} />
          <Route path="/" element={<Chat onSendMessage={handleSendMessage}/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
