import React from 'react';
import { LuKeyboard, LuSend } from 'react-icons/lu';
import { Input, Button, InputGroup, InputLeftElement, InputRightElement, Stack, Heading, Box } from '@chakra-ui/react';
import ChatOption from './ChatOption';

interface PromptsProps {
  onClick: (message: string) => Promise<string>;
}

interface Message {
  type: string, 
  content: string
}

const Prompts:React.FC<PromptsProps> = ({ onClick }) =>  {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [getFirstPrompts, setGetFirstPrompts] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function fetchFirstPrompts() {
      try {
        if (getFirstPrompts) {
          getNewPrompts("", getFirstPrompts);
          setGetFirstPrompts(false); 
        }
      } catch (e) {
        console.error(e);
      }
    }

    fetchFirstPrompts();
    console.log(messages)
  }, [messages]);

  const getNewPrompts = async (message: string, getFirstPrompts: boolean) => {

    // const answer: Object = JSON.parse(message);
    // const answerMessageObj: Message = {
    //   type: "answer", 
    //   content: answer. 
    // }

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
      
      // move to backend if ever
      const filteredArray = data.filter((str: string) => str && str.includes('?'));
      const msgArray = filteredArray.map((msg: string) => ({
        type: 'prompt',
        content: msg,
      }));

      setMessages([...messages, ...msgArray]);
    } catch (err) {
      console.log(err);
    }
  }

  const handleClick = async (selectedPrompt: string) => {
    // get answer from chat api 
    const answer = await onClick(selectedPrompt);
    setMessages([...messages, ({type: "answer", content: answer})])

    // create new prompts from answer
    getNewPrompts(JSON.stringify(answer), false);
    return {};
  };

      return (
        <>
          <Stack width="100%" height="100%" justifyContent="center" padding="0.5rem">
            {messages.map((msg, index) =>
              msg.type === 'prompt' ? (
                <ChatOption title={msg.content} key={index} onClick={handleClick} />
              ) : (
                <Box key={index} bg="lightBlue" textAlign={msg.type === 'prompt' ? 'left' : 'right'} borderRadius="md" />
              ),
            )}
          </Stack>
        </>
      );
  };

export default Prompts
