import React from 'react'

interface PromptsProps {
  onClick: (message: string) => Object;
}

const Prompts:React.FC<PromptsProps> = ({ onClick }) =>  {
  const [message, setMessage] = React.useState<string>("");
  const [selectedPrompt, setSelectedPrompt] = React.useState<string>("");

  // const handleClick = (e: React.MouseEvent<HTMLElement>) => {
  //   const [selectedPrompt, setSelectedPrompt] = React.useState<string>('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const prompt = e.currentTarget.textContent || ''; // Get the text content of the button
      setSelectedPrompt(prompt);

      // Call onClick with the selected prompt
      onClick(prompt);
  }

      return (
        <>
          <div>THIS IS THE Prompts</div>
          <button onClick={handleClick}>Prompt</button>
        </>
      );
  };

  
    // setSelectedPrompt(e.target.value);
    // chat answer
      // change state of selected prompt 
      // call chat api with selected prompt
      // if (selectedPrompt.trim() !== '') {
      //   onClick(selectedPrompt);
      // }

export default Prompts
