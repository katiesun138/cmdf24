import React from 'react';
import { LuKeyboard, LuPenSquare, LuSend } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { Input, Button, InputGroup, InputLeftElement, InputRightElement, Stack, Heading, Box, Text, Flex, Icon, Image} from '@chakra-ui/react';

interface PromptsProps {
  onClick: (message: string) => Promise<string>;
}

interface Message {
  type: string, 
  content: string
}

const Prompts:React.FC<PromptsProps> = ({ onClick }) =>  {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [getFirstPrompts, setGetFirstPrompts] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function fetchFirstPrompts() {
      try {
        if (getFirstPrompts) {
          getNewPrompts("", getFirstPrompts)
            .then(promptsArr => {
              setMessages([...messages, ...promptsArr]);
            })
            .catch(err => { console.log(err) });
          setGetFirstPrompts(false); 
        }
      } catch (e) {
        console.error(e);
      }
    }

    fetchFirstPrompts();
    console.log(messages)
  }, [messages]);

  const getNewPrompts = async (message: string, getFirstPrompts: boolean) => {

    const userInputRequest = {
      method: 'POST',
      mode: 'cors' as RequestMode,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userInput: message,
        getFirstPrompts: getFirstPrompts, 
      }),
    }; 

    console.log(userInputRequest);
    var promptsArr = []

    try {
      const response = await fetch('http://localhost:8080/bigsister/prompts', userInputRequest);
      const data = await response.json();
      console.log(data);
      
      promptsArr = data.map((msg: string) => ({
        type: 'prompt',
        content: msg,
      }));

      return promptsArr;

    } catch (err) {
      console.log(err);
    }
  }

  const handleClick = async (selectedPrompt: string) => {
    var ansMessages: Message[] = [];

    onClick(selectedPrompt)
      .then(answer => {
        ansMessages.push({ type: 'answer', content: answer });
        return getNewPrompts(JSON.stringify(answer), false);
      })
      .then((promptsArr) => {
        const newArr = [...ansMessages, ...promptsArr];
        setMessages([...messages, ...newArr]);
      })
      .catch(err => { console.log(err) });
  };

      return (
        <>
          <Stack width="100%" height="100vh" justifyContent="flex-start" paddingInline={['1rem', '2rem', '8rem']} gap="1.6rem" maxWidth="1200px">
            <Flex
              paddingBlock="0.5rem"
              position="sticky"
              top="0"
              bg="peach"
              // borderBottom="1px solid rgba(0, 0, 0, 0.20)"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Flex gap="0.5rem" alignItems="center">
                <Button paddingInline="0" color="black">
                  <Image alignSelf="center" src="/bigsisicon.png" alt="Description of the image" style={{ maxWidth: '1.6rem', maxHeight: '100px' }} />
                </Button>
              </Flex>
              <Heading fontSize="md" fontWeight="600">
                Chat with BigSister
              </Heading>
              <Link to="/livechat">
                <Button paddingInline="0" color="black">
                  <Icon as={LuPenSquare} boxSize="1.6rem" />
                </Button>
              </Link>
            </Flex>
            <Stack height="100vh" overflow="scrollX">
              <Stack
                spacing={2}
                overflowY="auto"
                bottom="6rem"
                paddingBottom="1rem"
                direction="column"
                alignItems="flex-end"
                justifyContent="flex-end"
                height="80%"
              >
                {messages.length === 0 && (
                  <Flex width="100%" justifyContent="center">
                    <Text color="black" padding="0.5rem" fontSize="md" fontWeight="700">
                      Please wait... BigSister is generating questions for you...
                    </Text>
                  </Flex>
                )}
                {messages.map((msg, index) =>
                  msg.type === 'prompt' ? (
                    <Button
                      key={msg.type}
                      width="max-width"
                      textAlign="right"
                      alignSelf="flex-end"
                      p={2}
                      bg="#FFFFFF"
                      borderRadius="24px 24px 0 24px"
                      onClick={() => handleClick(msg.content)}
                    >
                      <Text color="black" padding="0.5rem">
                        {msg.content}
                      </Text>
                    </Button>
                  ) : (
                    <Box
                      key={index}
                      textAlign='left'
                      bg="hotpink"
                      alignSelf='flex-start'
                      width="fit-content"
                      p={2}
                      borderRadius='24px 24px 24px 0'
                    >
                      <Text color='white' padding="0.5rem">
                        {msg.content}
                      </Text>
                    </Box>
                  ),
                )}
              </Stack>
            </Stack>
          </Stack>
        </>
      );
  };

export default Prompts
