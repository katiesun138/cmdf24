import React from 'react';
import { LuKeyboard, LuSend } from 'react-icons/lu';
import { Input, Button, InputGroup, InputLeftElement, InputRightElement, Grid, Stack, Heading } from '@chakra-ui/react';
import ChatOption from './ChatOption';


interface ChatProps {
  onSendMessage: (message: string) => Object;
}

const Chat: React.FC<ChatProps> = ({ onSendMessage }) =>  {
  const [message, setMessage] = React.useState<string>("");
  const [answer, setAnswer] = React.useState<Object>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() !== '') {
      const response = onSendMessage(message);
      setAnswer(response);
      setMessage('');
    }
  }; 

    return (
      // <>
      //   <div>THIS IS THE CHAT</div>
      //   <div>{answer}</div>
      //   <form onSubmit={handleSubmit}>
      //     <input type="text" 
      //     placeholder="Type your message..." 
      //     value={message} 
      //     onChange={e => setMessage(e.target.value)} />
      //     <button
      //       type="submit"
      //     >
      //       Send Message
      //     </button>
      //   </form>
      // </>
      <Stack width="100%" height="100%" justifyContent="center" padding="0.5rem">
        <Heading fontSize="md" fontWeight="600">
          Suggested Topics
        </Heading>
        <Grid
          templateColumns={['repeat(2, 1fr)', 'repeat(auto-fill, minmax(200px, 1fr))']} // Adjust the number of columns as needed
          gap="6px" // Adjust the gap between grid items as needed
          width="100%"
        >
          {/* <ChatOption image="/egg-svgrepo-com 1 (2).svg" desc="Learn your rights" title="Fertility Rights" />
          <ChatOption image="/eggIcon.svg" desc="Learn your rights" title="Fertility Rights" />
          <ChatOption image="/femalesIcon.svg" desc="Learn your rights" title="Fertility Rights" />
          <ChatOption image="/medicalIcon.svg" desc="Learn your rights" title="Fertility Rights" /> */}
        </Grid>
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
          />
          <InputRightElement w="3.0rem">
            <Button h="2.0rem" bg="hotpink" padding="0rem" borderRadius="100px">
              <LuSend />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Stack>
    );
  }

export default Chat;