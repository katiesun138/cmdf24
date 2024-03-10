import { Flex, Button, Text, Stack, Image } from '@chakra-ui/react';
import React from 'react';
import { LuHome } from 'react-icons/lu';

function Navbar() {
  return (
    <Flex
      position="fixed"
      bottom="2rem"
      color="white"
      paddingInline={['2rem', '4rem', '8rem']}
      justifySelf="center"
      justifyContent="space-between"
      width="100%"
      maxWidth="800px"
      alignItems="center"
      borderRadius="100px"
      height="72px"
    >
      <Flex bg="black" borderRadius="100px" paddingInline="2rem" paddingBlock="1rem" justifySelf="center" justifyContent="space-between" width="100%">
        <Stack alignItems="center" justifyContent="center" gap="0">
          <LuHome />
          <Text fontSize="xs" color="white" textAlign="center">
            Home
          </Text>
        </Stack>
        <Stack alignItems="center" justifyContent="center" gap="0">
          <LuHome />
          <Text fontSize="xs" color="white" textAlign="center">
            Chat
          </Text>
        </Stack>
        <Stack alignItems="center" justifyContent="center" gap="0">
          <LuHome />
          <Text fontSize="xs" color="white" textAlign="center">
            Map
          </Text>
        </Stack>
        <Stack alignItems="center" justifyContent="center" gap="0">
          <LuHome />
          <Text fontSize="xs" color="white" textAlign="center">
            Community
          </Text>
        </Stack>
        <Stack alignItems="center" justifyContent="center" gap="0">
          <LuHome />
          <Text fontSize="xs" color="white" textAlign="center">
            Saved
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default Navbar;
