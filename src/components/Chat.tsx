import React from 'react'

interface ChatProps {
  onSendMessage: (message: string) => void;
}

const Chat:React.FC<ChatProps> = ({ onSendMessage }) =>  {
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
