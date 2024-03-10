import React from 'react'

interface ChatProps {
  onSendMessage: (message: string) => Object;
}

const Chat:React.FC<ChatProps> = ({ onSendMessage }) =>  {
  const [message, setMessage] = React.useState<string>("");
  const [answer, setAnswer] = React.useState<Object>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() !== '') {
      const answer = onSendMessage(message);
      setAnswer(answer);
      setMessage('');
    }
  }; 

  return (
    <>
      <div>THIS IS THE CHAT</div>
      <div><p>{JSON.stringify(answer)}</p></div>
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
