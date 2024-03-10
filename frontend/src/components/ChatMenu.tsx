import React from 'react';
import { LuKeyboard, LuSend } from 'react-icons/lu';
import { Link } from "react-router-dom";
import { Flex, Box, Input, Button, InputGroup, InputLeftElement, InputRightElement, Grid, Stack, Heading, Text } from '@chakra-ui/react';


interface ChatMenuProps {
  onClick: (option: 'livechat' | 'prompts') => void; // Option can be 'livechat' or 'prompts'
}

const ChatMenu: React.FC<ChatMenuProps> = ({ onClick }) => {
  const handleOptionClick = (option: 'livechat' | 'prompts') => {
    onClick(option);
  };

  return (
    <Stack width="100%" height="100%" justifyContent="center" padding="0.5rem">
        <Heading fontSize="md" fontWeight="600">
          Chat with BigSister
        </Heading>

        <Stack spacing={2}>
            <Box
              textAlign={'center'}
              bg={'hotpink'}
              color="white"
              p={2}
              borderRadius="md"
            >
              <Text fontSize="1.1rem" color='white'>{"Hi, I'm BigSister!"}</Text>
              <Text color='white'>I'm here to give you information about abortion and provide support if needed. What chat option do you prefer?"</Text>
            </Box>
        </Stack>
        <Flex justifyContent="center" mt={4}>
        <Link to="/livechat"><Button colorScheme="hotpink" mx={2} minWidth="200px" onClick={() => handleOptionClick('livechat')}>
          <Flex direction="column" alignItems="center" whiteSpace="normal">
            <Text fontSize="1.5rem">Live Chat</Text>
            <Text fontSize="0.8rem">Type your own questions and receive answers right away!</Text>
          </Flex>
        </Button></Link>
        <Link to="/prompts"><Button colorScheme="hotpink" mx={2} minWidth="200px" onClick={() => handleOptionClick('prompts')}>
          <Flex direction="column" alignItems="center" whiteSpace="normal">
            <Text fontSize="1.5rem">Suggested Prompts</Text>
            <Text fontSize="0.8rem">If you don't feel like typing, this option allows you to select prompts to learn more about abortion.</Text>
          </Flex>
        </Button></Link>
        </Flex>
        
      </Stack>
  );
};

export default ChatMenu;
