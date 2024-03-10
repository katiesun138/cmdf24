import React from 'react';
import { LuKeyboard, LuSend, LuMoreHorizontal, LuBookmark } from 'react-icons/lu';
import { Flex, Text, Image, Input, Button, InputGroup, InputLeftElement, InputRightElement, Grid, Stack, Heading } from '@chakra-ui/react';
import ChatOption from './ChatOption';
import TopicBox from './TopicBox';

function Landing() {
  return (
    <Stack width="100%" paddingInline={['1rem', '2rem', '8rem']} gap="1.6rem" height="100%" justifyContent="center" padding="0.5rem">
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
      <Stack>
        <Flex width="100%" justifyContent="space-between">
          <Heading fontSize="md" fontWeight="700" opacity="0.6">
            Recommended Topics
          </Heading>
          <Text fontSize="sm" fontWeight="700" color="hotpink">
            View all
          </Text>
        </Flex>
        <Flex gap="0.5rem">
          <TopicBox
            desc="Post-menstrual syndrome, also known as premenstrual dysphoric disorder (PMDD), refers to a condition where individuals experience severe
        emotional and physical symptoms following their menstrual period. It can include mood swings, irritability, depression, anxiety, fatigue, and
        physical discomfort."
            title="How to Deal with Post Menstrual Syndrome"
          />
          <TopicBox
            desc="In the complex landscape of intimate relationships, the dynamics between partners can sometimes take a harmful turn, leading to emotional, psychological, or physical abuse. Recognizing the signs of an abusive relationship is crucial for individuals to protect themselves and seek the support they need. Abuse can manifest in various forms, often insidious and difficult to detect at first glance. Understanding these signs can be the first step towards breaking free from the cycle of abuse and seeking healing."
            title="Recognizing the Signs of an Abusive Relationship: A Vital Step Towards Safety and Healing"
          />
        </Flex>
      </Stack>
      <Stack>
        <Flex width="100%" justifyContent="space-between">
          <Heading fontSize="md" fontWeight="700" opacity="0.6">
            Nearby Clinics
          </Heading>
          <Text fontSize="sm" fontWeight="700" color="hotpink">
            View all
          </Text>
        </Flex>
      </Stack>

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
    </Stack>
  );
}

export default Landing;
