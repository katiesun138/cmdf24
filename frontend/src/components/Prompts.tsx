import React from 'react';
import { LuKeyboard, LuSend } from 'react-icons/lu';
import { Input, Button, InputGroup, InputLeftElement, InputRightElement, Stack, Heading, Box, Text } from '@chakra-ui/react';
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
    const newMessages: Message[] = [{ type: 'answer', content: answer }];

    // create new prompts from answer
    // getNewPrompts(JSON.stringify(answer), false);

    const userInputRequest = {
      method: 'POST',
      mode: 'cors' as RequestMode,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userInput: answer,
        getFirstPrompts: false,
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

      const newArr = [...newMessages, ...msgArray];

      setMessages([...messages, ...newArr]);
    } catch (err) {
      console.log(err);
    }
  };

      return (
        <>
          <Stack
            spacing={2}
            position="sticky"
            overflow="scrollX"
            bottom="6rem"
            direction="column"
            alignItems="flex-end"
            justifyContent="flex-end"
            height="100%"
          >
            {messages.map((msg, index) =>
              msg.type === 'prompt' ? (
                <Button key={msg.type} width="fit-content" alignSelf="flex-start" p={2} onClick={() => handleClick(msg.content)}>
                  <Text color="black" padding="0.5rem">
                    {msg.content}
                  </Text>
                </Button>
              ) : (
                <Box
                  key={index}
                  textAlign={msg.type === 'answer' ? 'right' : 'left'}
                  bg={msg.type === 'answer' ? 'hotpink' : '#FFFFFF'}
                  alignSelf={msg.type === 'answer' ? 'flex-end' : 'flex-start'}
                  width="fit-content"
                  p={2}
                  borderRadius={msg.type === 'answer' ? '24px 24px 0 24px' : '24px 24px 24px 0 '}
                >
                  <Text color={msg.type === 'answer' ? 'white' : 'black'} padding="0.5rem">
                    {msg.content}
                  </Text>
                </Box>
              ),
            )}
          </Stack>
        </>
      );
  };

export default Prompts
