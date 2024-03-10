import { Flex, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { LuHome, LuMap, LuMessageCircle, LuUsers2, LuBookmark } from 'react-icons/lu';

const Navbar = () => {
  return (
    <Flex
      position="fixed"
      bottom="0.5rem"
      color="black"
      paddingInline={['2rem', '4rem', '8rem']}
      justifySelf="center"
      justifyContent="space-between"
      width={['100%', '80%']}
      maxWidth="800px"
      alignItems="center"
      borderRadius="100px"
      height="72px"
    >
      <Flex
        bg="white"
        borderRadius="100px"
        paddingInline="2rem"
        paddingBlock="0.4rem"
        justifySelf="center"
        boxShadow="0 4px 12px rgba(0, 0, 10, 0.2)"
        justifyContent="space-between"
        width="100%"
      >
        <Link to="/">
          <Button display="flex" width="2rem" alignItems="center" justifyContent="center" gap="0">
            <LuHome />
            <Text fontSize="xs" color="black" textAlign="center">
              Home
            </Text>
          </Button>
        </Link>

        <Link to="/location">
          <Button display="flex" width="2rem" alignItems="center" justifyContent="center" gap="0">
            <LuMap />
            <Text fontSize="xs" color="black" textAlign="center">
              Map
            </Text>
          </Button>
        </Link>

        <Link to="/chat">
          <Button display="flex" width="2rem" alignItems="center" justifyContent="center" gap="0">
            <Flex padding="0.8rem" bg="hotpink" borderRadius="100px">
              <LuMessageCircle color="white" />
            </Flex>
          </Button>
        </Link>

        <Link to="/community">
          <Button display="flex" width="2rem" alignItems="center" justifyContent="center" gap="0">
            <LuUsers2 />
            <Text fontSize="xs" color="black" textAlign="center">
              Community
            </Text>
          </Button>
        </Link>

        <Link to="/saved">
          <Button display="flex" width="2rem" alignItems="center" justifyContent="center" gap="0">
            <LuBookmark />
            <Text fontSize="xs" color="black" textAlign="center">
              Saved
            </Text>
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
