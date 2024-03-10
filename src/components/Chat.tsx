import React from 'react';
import { Grid } from '@chakra-ui/react';
import ChatOption from './ChatOption';

function Chat() {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)" // Adjust the number of columns as needed
      gap={4} // Adjust the gap between grid items as needed
      width="fit-content"
    >
      <ChatOption image="/egg-svgrepo-com 1 (2).svg" desc="Learn your rights" title="Fertility Rights" />
      <ChatOption image="/eggIcon.svg" desc="Learn your rights" title="Fertility Rights" />
      <ChatOption image="/femalesIcon.svg" desc="Learn your rights" title="Fertility Rights" />
      <ChatOption image="/medicalIcon.svg" desc="Learn your rights" title="Fertility Rights" />
    </Grid>
  );
}

export default Chat;
