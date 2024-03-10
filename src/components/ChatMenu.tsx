import React from 'react';
import { Link } from "react-router-dom";


interface ChatMenuProps {
  onClick: (option: 'livechat' | 'prompts') => void; // Option can be 'livechat' or 'prompts'
}

const ChatMenu: React.FC<ChatMenuProps> = ({ onClick }) => {
  const handleOptionClick = (option: 'livechat' | 'prompts') => {
    onClick(option);
  };

  return (
    <>
      <div>THIS IS THE ChatMenu</div>
      <Link to="/livechat"><button onClick={() => handleOptionClick('livechat')}>Live Chat</button></Link>
      <div></div>
      <Link to="/prompts"><button onClick={() => handleOptionClick('prompts')}>Prompts</button></Link>     
    </>
  );
};

export default ChatMenu;
