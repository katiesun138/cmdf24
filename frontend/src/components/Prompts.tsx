import React from 'react'

interface PromptsProps {
  onClick: (message: string) => Object;
}

const Prompts:React.FC<PromptsProps> = ({ onClick }) =>  {
  const [messages, setMessages] = React.useState<string[]>([]);
  const [prompts, setPrompts] = React.useState<string[]>([]);

  React.useEffect(() => {
    const firstPrompts = getNewPrompts("", true);
    console.log(firstPrompts);
  }, []);

  const getNewPrompts = async (message: string, getFirstPrompts: boolean) => {

    const userInputRequest = {
      method: 'POST',
      mode: 'cors' as RequestMode,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userInput: message,
        getFirstPrompts: getFirstPrompts, 
      }),
    }; 

    console.log(userInputRequest);

    try {
      const response = await fetch('http://localhost:8080/bigsister/prompts', userInputRequest);
      const data = await response.json();
      console.log(data);

      setPrompts(data);
      setMessages([...messages, ...data])
    } catch (err) {
      console.log(err);
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, selectedPrompt: string) => {
    const answer = onClick(selectedPrompt);
    const stringAnswer = JSON.stringify(answer);
    setMessages([...messages, stringAnswer]);
    getNewPrompts(JSON.stringify(stringAnswer), false);
  };

      return (
        <>
          {prompts.map(prompt => {
            return (
              <button 
                onClick={(e) => handleClick(e, prompt)}>
                {prompt}
              </button>
            )
          })}
          <div>THIS IS THE Prompts</div>
        </>
      );
  };

export default Prompts
