import { Box, Flex, Text, Stack, Image } from '@chakra-ui/react';
import React from 'react';

interface ChatOptionProps {
  desc: string;
  title: string;
  image: string;
}

function ChatOption({ desc, title, image }: ChatOptionProps) {
  return (
    <Flex
      padding="1rem"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="24px"
      width="200px"
      height="72px"
      border="1px solid rgba(0, 0, 0, 0.20)"
    >
      <Flex justifyContent="center" alignItems="center" borderRadius="4px" width="42px" height="42px" border="1px solid rgba(0, 0, 0, 0.20)">
        <Image src={image} alt="Description of the image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </Flex>
      <Stack gap="0">
        <Text fontWeight="800">{title}</Text>
        <Text color="black" opacity="0.6">
          {desc}
        </Text>
      </Stack>
    </Flex>
  );
}

export default ChatOption;
