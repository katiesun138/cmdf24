import { InputGroup, InputRightElement } from '@chakra-ui/input';
import { LuSend, LuPenSquare } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { Image, Flex, Button, Heading, Icon, Input } from '@chakra-ui/react';

export default function HeaderInfo() {
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
          <Link to="/"><Button paddingInline="0" color="black">
            <Image alignSelf="center" src="/bigsisicon.png" alt="Description of the image" style={{ maxWidth: '1.6rem', maxHeight: '100px' }} />
          </Button></Link>
        </Flex>
        <Heading fontSize="md" fontWeight="600">
          Welcome to BigSister
        </Heading>
        <Link to="/livechat"><Button paddingInline="0" color="black">
          <Icon as={LuPenSquare} boxSize="1.6rem" />
        </Button></Link>
    </Flex>
  );
}
