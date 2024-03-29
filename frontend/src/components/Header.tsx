import { InputGroup, InputRightElement } from '@chakra-ui/input';
import { LuSend, LuPenSquare } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { Image, Flex, Button, Heading, Icon, Input } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex
      paddingBlock="0.5rem"
      position="sticky"
      top="0"
      zIndex="100"
      bg="peach"
      // borderBottom="1px solid rgba(0, 0, 0, 0.20)"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Flex gap="0.5rem" alignItems="center">
      <Link to="/chat"><Button paddingInline="0" color="black">
            <Image alignSelf="center" src="/bigsisicon.png" alt="Description of the image" style={{ maxWidth: '1.6rem', maxHeight: '100px' }} />
          </Button></Link>
        <Heading fontSize="md" display={['none', 'none', 'block']}>
          BigSister
        </Heading>
      </Flex>
      <InputGroup
        variant="outline"
        marginInline="0.5rem"
        borderRadius="100px"
        maxWidth="70%"
        bg="white"
        borderColor="gray.200" // Set the border color to gray
        borderWidth="1px" // Set the border width to 1px
        color="gray.800"
      >
        <Input borderRadius="100px" placeholder="Ask any question..." _placeholder={{ color: 'gray.500', fontSize: 'sm' }} />
        <InputRightElement w="3.0rem">
          <Link to="/livechat"><Button h="2.0rem" bg="hotpink" padding="0rem" borderRadius="100px">
            <LuSend />
          </Button></Link>
        </InputRightElement>
      </InputGroup>
      <Link to="/livechat"><Button paddingInline="0" color="black">
        <Icon as={LuPenSquare} boxSize="1.6rem" />
      </Button></Link>
    </Flex>
  );
}
