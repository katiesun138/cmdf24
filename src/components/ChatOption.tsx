import { Box, Flex, Text } from '@chakra-ui/react';

function ChatOption() {
  return (
    <Flex justifyContent="space-between" alignItems="center" borderRadius="24px" width="200px" height="72px" border="1px solid rgba(0, 0, 0, 0.1)">
      <Box borderRadius="4px" width="42px" height="42px" border="1px solid rgba(0, 0, 0, 0.1)"></Box>
      <Text>Googoogaga</Text>
    </Flex>
  );
}

export default ChatOption;