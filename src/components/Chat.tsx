import React from 'react';
import { LuKeyboard } from 'react-icons/lu';
import { Input, InputGroup, InputLeftElement, Grid, Stack, Heading } from '@chakra-ui/react';
import ChatOption from './ChatOption';

function Chat() {
  return (
    <Stack width="100%" height="100%" justifyContent="center" padding="1rem">
      <Heading fontSize="md" fontWeight="600">
        Suggested Topics
      </Heading>
      <Grid
        templateColumns="repeat(2, 1fr)" // Adjust the number of columns as needed
        gap="6px" // Adjust the gap between grid items as needed
        width="fit-content"
      >
        <ChatOption image="/egg-svgrepo-com 1 (2).svg" desc="Learn your rights" title="Fertility Rights" />
        <ChatOption image="/eggIcon.svg" desc="Learn your rights" title="Fertility Rights" />
        <ChatOption image="/femalesIcon.svg" desc="Learn your rights" title="Fertility Rights" />
        <ChatOption image="/medicalIcon.svg" desc="Learn your rights" title="Fertility Rights" />
      </Grid>
      <InputGroup bg="#F8F8F8" borderRadius="100px" borderWidth="1px" borderColor="gray.300">
        <InputLeftElement pointerEvents="none">
          <LuKeyboard color="gray.300" />
        </InputLeftElement>
        <Input type="tel" border="none" borderRadius="100px" bg="none" placeholder="Phone number" />
      </InputGroup>
    </Stack>
  );
}

export default Chat;
