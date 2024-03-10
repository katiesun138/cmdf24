import React from 'react';
import { MdSupportAgent } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Flex, Box, Image, Button, InputGroup, InputLeftElement, InputRightElement, Grid, Stack, Heading, Text, Icon } from '@chakra-ui/react';
import ChatOption from './ChatOption';
import { LuPenSquare } from 'react-icons/lu';

interface ChatMenuProps {
  onClick: (option: 'livechat' | 'prompts') => void; // Option can be 'livechat' or 'prompts'
}

const ChatMenu: React.FC<ChatMenuProps> = ({ onClick }) => {
  const handleOptionClick = (option: 'livechat' | 'prompts') => {
    onClick(option);
  };

  return (
    <Stack
      width="100%"
      height="100vh"
      justifyContent="center"
      padding="0.5rem"
      paddingInline={['1rem', '2rem', '8rem']}
      gap="1.6rem"
      maxWidth="1200px"
    >
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
          <Button paddingInline="0" color="black">
            <Image alignSelf="center" src="/bigsisicon.png" alt="Description of the image" style={{ maxWidth: '1.6rem', maxHeight: '100px' }} />
          </Button>
        </Flex>
        <Heading fontSize="md" fontWeight="600">
          Chat with BigSister
        </Heading>
        <Button paddingInline="0" color="black">
          <Icon as={LuPenSquare} boxSize="1.6rem" />
        </Button>
      </Flex>

      <Stack spacing={2} justifyContent="space-between" height="100%">
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
        <Flex justifyContent="space-between" gap="0.5rem" height="fit-content" position="sticky" bottom="7rem">
          <Link to="/livechat">
            <Button colorScheme="hotpink" margin="0" padding="0" minWidth="200px" onClick={() => handleOptionClick('livechat')}>
              <Flex direction="column" alignItems="center" whiteSpace="normal">
                <ChatOption hasIcon={true} title="Live Chat" desc="Type your own questions and receive answers right away!"></ChatOption>
              </Flex>
            </Button>
          </Link>
          <Link to="/prompts">
            <Button colorScheme="hotpink" margin="0" padding="0" minWidth="200px" onClick={() => handleOptionClick('livechat')}>
              <Flex direction="column" alignItems="center" whiteSpace="normal">
                <ChatOption
                  hasIcon={false}
                  title="Suggested Prompts"
                  desc="If you don't feel like typing, this option allows you to select prompts."
                ></ChatOption>
              </Flex>
            </Button>
          </Link>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default ChatMenu;
