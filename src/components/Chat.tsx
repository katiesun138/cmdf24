import React from 'react'

interface ChatProps {
  onSendMessage: (message: string) => void;
}

const Chat:React.FC<ChatProps> = ({ onSendMessage }) =>  {
  const [messages, setMessages] = React.useState<string[]>([]);

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

    // console.log(userInputRequest);

    try {
      const response = await fetch('http://localhost:8080/bigsister', userInputRequest);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const [message, setMessage] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  }; 

  return (
    <>
      <div>THIS IS THE CHAT</div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Type your message..." 
        value={message} 
        onChange={e => setMessage(e.target.value)} />
        <button
          type="submit"
        >
          Send Message
        </button>
      </form>
    </>
  );
}

export default Chat
