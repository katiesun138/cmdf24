import { LuMapPin, LuPhone, LuArrowRight, LuPenSquare, LuSettings2, LuSend } from 'react-icons/lu';
import { Flex, Text, Image, Icon, Input, Button, Stack, Heading, InputGroup, InputRightElement } from '@chakra-ui/react';
import TopicBox from './TopicBox';
import HeaderInfo from './HeaderInfo';
import { Link } from 'react-router-dom';

function Info({ mgBot }: { mgBot: string }) {
  return (
    <Stack
      width="100%"
      marginBottom={mgBot}
      paddingInline={['1rem', '2rem', '8rem']}
      gap="1.6rem"
      maxWidth="1200px"
      height="100%"
      justifyContent="center"
      padding="0.5rem"
    >
      <HeaderInfo />
      <Stack
        gap="0"
        alignItems="space-between"
        padding="1.2rem"
        width="100%"
        bgGradient="linear(to-r, hotpink, dorange)"
        borderRadius="24px"
        justifyContent="space-between"
        height="fit-content"
      >
        <Image alignSelf="center" src="/bigsisicon.png" alt="Description of the image" style={{ maxWidth: '100px', maxHeight: '100px' }} />
        <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
          <Heading fontSize="1.6rem" color="white" textShadow="0 1px 2px rgba(0, 0, 10, 0.2)">
            Big Sister is here to help!
          </Heading>
          <Link to="/chat"><Button variant="white" color="#BB0038" paddingInline="36px" gap="0.5rem">
            Start
            <Icon as={LuArrowRight} boxSize="1.0rem" />
          </Button></Link>
        </Stack>
      </Stack>
      <Stack gap="1rem">
        <Flex width="100%" justifyContent="space-between">
          <br></br>
          <Heading fontSize="md" fontWeight="700" text-align="center">
            Welcome to BigSister! We are here to help women who need any support or guidance regarding abortion. 
          </Heading>
        </Flex>
        <Flex width="100%" justifyContent="space-between">
          <Text fontSize="md" fontWeight="500" text-align="center">
            According to the World Health Organization, 73 million induced abortions occur every year worldwide and 45% are unsafe.   
          </Text>
        </Flex>
        <Flex width="100%" justifyContent="space-between">
          <Text fontSize="md" fontWeight="500" text-align="center">
            At BigSister, we believe everyone should have easy and accessible to health. This is why we provide a free live ChatBot, an interactive map of nearby clinics and a forum with health practitioners for accurate and safe abortion information. 
          </Text>
        </Flex>
        <Flex width="100%" justifyContent="space-between">
          <Text fontSize="md" fontWeight="500" text-align="center">
            To increase accessibility, we provide two different options for the live chat: custom text input and the selection of question prompts through a simple click.
          </Text>
        </Flex>
        <Flex width="100%" justifyContent="space-between">
          <Text fontSize="md" fontWeight="500" text-align="center">
            This app is also totally free and anonymous. We highly value the respect of our users and we do not store any data. All the chat history is deleted once our users exit the page.
          </Text>
        </Flex>
        <Flex width="100%" justifyContent="space-between">
          <Text fontSize="md" fontWeight="700" text-align="center">
            BigSister is accessible, confidential, and essential.
          </Text>
        </Flex>
      </Stack>
    </Stack>
  );
}

export default Info;
