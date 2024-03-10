import React from 'react';
import { LuKeyboard, LuSend } from 'react-icons/lu';
import { Flex, Box, Input, Button, InputGroup, InputLeftElement, InputRightElement, Grid, Stack, Heading, Text } from '@chakra-ui/react';
import ChatOption from './ChatOption';


interface ChatProps {
  onSendMessage: (message: string) => Promise<string>;
}

interface Message {
    type: string,
    content: string
}

const Chat: React.FC<ChatProps> = ({ onSendMessage }) =>  {
  const [message, setMessage] = React.useState<string>("");
  // const [answer, setAnswer] = React.useState<Object>({});
  const [messages, setMessages] = React.useState<Message[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() !== '') {
      const messageType: Message = {
        type: "user",
        content: message
      };
  
      // Add user's message to the messages array immediately
      setMessages(prevMessages => [...prevMessages, messageType]);
      setMessage('');
  
      try {
        const response = await onSendMessage(message);
  
        const responseMsg: Message = {
          type: "chat",
          content: response
        };
  
        // Replace the user's message with the response message
        setMessages(prevMessages => [...prevMessages, responseMsg]);
      } catch (error) {
        console.error(error);
      }
    }
  }; 

    return (
      <Stack width="100%" height="100%" justifyContent="center" padding="0.5rem">
        <Heading fontSize="md" fontWeight="600">
          Chat with BigSister
        </Heading>

        <Stack spacing={2}>
            <Box
              textAlign={'left'}
              bg={'green.500'}
              color="white"
              p={2}
              borderRadius="md"
            >
              <Text>{"Hi, I'm BigSister! Feel free to ask me anything about abortion. This is a safe space, I am here to provide any guidance and support. Be reassured, our conversation stays anonymous and all the chat history gets deleted once you close this chat!"}</Text>
            </Box>
        </Stack>

        <Stack spacing={2}>
          {messages.map((msg, index) => (
            <Box
              key={index}
              textAlign={msg.type === "user" ? 'right' : 'left'}
              bg={msg.type === "user" ? 'blue.500' : 'green.500'}
              color="white"
              p={2}
              borderRadius="md"
            >
              <Text>{msg.content}</Text>
            </Box>
          ))}
        </Stack>
        
        {/* <Text>{JSON.stringify(messages)}</Text> */}

        <InputGroup bg="#F8F8F8" borderRadius="100px" borderWidth="1px" borderColor="gray.300">
          <InputLeftElement pointerEvents="none">
            <LuKeyboard color="gray.300" />
          </InputLeftElement>
          <Input
            type="tel"
            border="none"
            borderRadius="100px"
            color="gray.600"
            bg="none"
            placeholder="Ask anything..."
            _placeholder={{ color: 'gray.400', fontSize: 'sm' }}
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <InputRightElement w="3.0rem">
            <Button onClick={handleSubmit} type="submit" h="2.0rem" bg="hotpink" padding="0rem" borderRadius="100px">
              <LuSend />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Stack>
    );
  }

export default Chat;