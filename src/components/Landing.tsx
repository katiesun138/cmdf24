import React from 'react';
import { LuKeyboard, LuSend } from 'react-icons/lu';
import { Flex, Text, Image, Input, Button, InputGroup, InputLeftElement, InputRightElement, Grid, Stack, Heading } from '@chakra-ui/react';
import ChatOption from './ChatOption';
import Navbar from './NavBar';

function Landing() {
  return (
    <Stack width="100%" height="100%" justifyContent="center" padding="0.5rem">
      <Stack
        gap="0"
        alignItems="space-between"
        padding="1.2rem"
        width="100%"
        bgGradient="linear(to-r, lpink, lorange)"
        borderRadius="24px"
        height="200px"
      >
        <Image alignSelf="center" src="/bigsisicon.png" alt="Description of the image" style={{ maxWidth: '100px', maxHeight: '100px' }} />
        <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
          <Heading fontSize="1.6rem">Get the help you need today.</Heading>
          <Button variant="hotpink" paddingInline="36px">
            Start
          </Button>
        </Stack>
      </Stack>
      <Flex width="100%" justifyContent="space-between">
        <Heading fontSize="md" fontWeight="700" opacity="0.6">
          Recommended Topics
        </Heading>
        <Text fontSize="sm" fontWeight="700" color="hotpink">
          View all
        </Text>
      </Flex>
      <Grid
        templateColumns="repeat(2, 1fr)" // Adjust the number of columns as needed
        gap="6px" // Adjust the gap between grid items as needed
        width="100%"
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
      <Navbar />
    </Stack>
  );
}

export default Landing;
