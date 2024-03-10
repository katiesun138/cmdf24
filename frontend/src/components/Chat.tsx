import React from 'react';
import { LuKeyboard, LuPenSquare, LuSend } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { Flex, Box, Input, Button, InputGroup, InputLeftElement, InputRightElement, Image, Stack, Heading, Text, Icon } from '@chakra-ui/react';

interface ChatProps {
  onSendMessage: (message: string) => Promise<string>;
}

interface Message {
  type: string;
  content: string;
}

const Chat: React.FC<ChatProps> = ({ onSendMessage }) => {
  const [message, setMessage] = React.useState<string>('');
  // const [answer, setAnswer] = React.useState<Object>({});
  const [messages, setMessages] = React.useState<Message[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() !== '') {
      const messageType: Message = {
        type: 'user',
        content: message,
      };

      // Add user's message to the messages array immediately
      setMessages(prevMessages => [...prevMessages, messageType]);
      setMessage('');

      try {
        const response = await onSendMessage(message);

        const responseMsg: Message = {
          type: 'chat',
          content: response,
        };

        // Replace the user's message with the response message
        setMessages(prevMessages => [...prevMessages, responseMsg]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Stack width="100%" height="100vh" justifyContent="flex-start" paddingInline={['1rem', '2rem', '8rem']} gap="1.6rem" maxWidth="1200px">
      <Flex
        paddingBlock="0.5rem"
        position="sticky"
        top="0"
        bg="peach"
        // borderBottom="1px solid rgba(0, 0, 0, 0.20)"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Flex gap="0.5rem" alignItems="center">
        <Link to="/chat"><Button paddingInline="0" color="black">
            <Image alignSelf="center" src="/bigsisicon.png" alt="Description of the image" style={{ maxWidth: '1.6rem', maxHeight: '100px' }} />
          </Button></Link>
        </Flex>
        <Heading fontSize="md" fontWeight="600">
          Chat with BigSister
        </Heading>
        <Link to="/livechat"><Button paddingInline="0" color="black">
          <Icon as={LuPenSquare} boxSize="1.6rem" />
        </Button></Link>
      </Flex>

      <Stack spacing={2}>
        <Flex>
          <Image alignSelf="center" src="/bigsisicon.png" alt="Description of the image" style={{ maxWidth: '100px', maxHeight: '100px' }} />
          <Box textAlign={'left'} bg={'white'} color="black" p={2} borderRadius="24px 24px 24px 0">
            <Text padding="0.5rem">
              {
                "Hi, I'm BigSister! Feel free to ask me anything about abortion. This is a safe space, I am here to provide any guidance and support. Be reassured, our conversation stays anonymous and all the chat history gets deleted once you close this chat!"
              }
            </Text>
          </Box>
        </Flex>
      </Stack>
      <Stack height="100vh" overflow="scrollX">
        <Stack
          spacing={2}
          overflowY="auto"
          bottom="6rem"
          paddingBottom="1rem"
          direction="column"
          alignItems="flex-end"
          justifyContent="flex-end"
          height="80%"
        >
          {messages.map((msg, index) => (
            <Box
              key={index}
              textAlign={msg.type === 'user' ? 'right' : 'left'}
              bg={msg.type === 'user' ? 'hotpink' : '#FFFFFF'}
              alignSelf={msg.type === 'user' ? 'flex-end' : 'flex-start'}
              width="fit-content"
              p={2}
              borderRadius={msg.type === 'user' ? '24px 24px 0 24px' : '24px 24px 24px 0 '}
            >
              <Text color={msg.type === 'user' ? 'white' : 'black'} padding="0.5rem">
                {msg.content}
              </Text>
            </Box>
          ))}
        </Stack>
        <InputGroup
          position="sticky"
          bottom="5rem"
          width="100%"
          justifySelf="center"
          bg="white"
          borderRadius="100px"
          borderWidth="1px"
          borderColor="gray.300"
        >
          <InputLeftElement pointerEvents="none">
            <LuKeyboard color="gray.300" />
          </InputLeftElement>
          <Input
            border="none"
            borderRadius="100px"
            color="gray.600"
            width="100%"
            bg="none"
            placeholder="Ask anything..."
            _placeholder={{ color: 'gray.500', fontSize: 'sm' }}
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

      {/* <Text>{JSON.stringify(messages)}</Text> */}
    </Stack>
  );
};

export default Chat;
