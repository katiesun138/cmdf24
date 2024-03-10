import { Flex, Text, Stack, Button } from '@chakra-ui/react';
import React from 'react';

interface ChatOptionProps {
  desc?: string;
  title: string;
  onClick: (message: string) => Object;
  key?: number;
}


function ChatOption({ desc, title, onClick, key }: ChatOptionProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    onClick(title);
  }; 

  return (
    <Flex
      padding="1rem"
      justifyContent="center"
      gap="0.5rem"
      alignItems="center"
      borderRadius="24px"
      height="62px"
      border="1px solid rgba(0, 0, 0, 0.20)"
    >
      <Stack gap="0">
        <Button onClick={handleClick} key={key}>
          <Text fontWeight="800" fontSize="2xs">
            {title}
          </Text>
          <Text color="black" opacity="0.6" fontSize="2xs">
            {desc}
          </Text>
        </Button>
      </Stack>
    </Flex>
  );
}

export default ChatOption;
