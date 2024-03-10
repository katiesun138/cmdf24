import React from 'react'

interface PromptsProps {
  onClick: (message: string) => Object;
}

const Prompts:React.FC<PromptsProps> = ({ onClick }) =>  {
  const [message, setMessage] = React.useState<string>("");
  const [selectedPrompt, setSelectedPrompt] = React.useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    // setSelectedPrompt(e.target.value);
    // chat answer
      // change state of selected prompt 
      // call chat api with selected prompt
      if (selectedPrompt.trim() !== '') {
        onClick(selectedPrompt);
      }

    // create 3 prompts
      // call prompt api with follow up prompt + most recent answer 

  }; 

  return (
    <>
      <div>THIS IS THE Prompts</div>
        <button onClick={e => handleClick(e)}>
          Prompt
        </button>
    </>
  );
}

export default Prompts
