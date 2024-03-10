import { Flex, Button, Text, Stack, Image } from '@chakra-ui/react';
import React from 'react';
import { LuHome } from 'react-icons/lu';

function Navbar() {
  return (
    <Flex bg="black" color="white" padding="2rem" justifyContent="space-between" alignItems="center" borderRadius="100px" height="72px">
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
        <Text fontSize="xs" maxWidth="3rem" color="white" textAlign="center">
          Nearby Clinics
        </Text>
      </Stack>
      <Stack alignItems="center" justifyContent="center" gap="0">
        <LuHome />
        <Text fontSize="xs" maxWidth="3rem" color="white" textAlign="center">
          Nearby Clinics
        </Text>
      </Stack>
      <Stack alignItems="center" justifyContent="center" gap="0">
        <LuHome />
        <Text fontSize="xs" maxWidth="3rem" color="white" textAlign="center">
          Nearby Clinics
        </Text>
      </Stack>
    </Flex>
  );
}

export default Navbar;
