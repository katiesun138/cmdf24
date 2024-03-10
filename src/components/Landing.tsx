import React from 'react';
import { LuMapPin, LuPhone, LuArrowRight } from 'react-icons/lu';
import { Flex, Text, Image, Icon, Input, Button, Stack, Heading } from '@chakra-ui/react';
import TopicBox from './TopicBox';

interface ClinicProps {
  desc: string;
  title: string;
  image: string;
  number: string;
}

function NearbyClinicBox({ desc, title, image, number }: ClinicProps) {
  return (
    <Stack
      padding="0.5rem"
      justifyContent="center"
      gap="0.5rem"
      alignItems="center"
      borderRadius="24px"
      width="250px"
      bg="white"
      height="250px"
      border="1px solid rgba(0, 0, 0, 0.20)"
    >
      <Flex justifyContent="center" alignItems="center" borderRadius="4px" width="232px">
        <Image borderRadius="12px" src={image} alt="Description of the image" />
      </Flex>
      <Stack gap="0" width="100%" paddingInline="0.5rem">
        <Text fontWeight="800" fontSize="sm">
          {title}
        </Text>
        <Flex gap="0.8rem">
          <Text display="flex" alignItems="center" gap="0.2rem" color="black" opacity="0.6" fontSize="sm">
            <LuMapPin color="hotpink" />
            {desc}
          </Text>
          <Text display="flex" alignItems="center" gap="0.2rem" color="black" opacity="0.6" fontSize="sm">
            <LuPhone color="hotpink" />
            {number}
          </Text>
        </Flex>
      </Stack>
    </Stack>
  );
}

function Landing({ mgBot }: { mgBot: string }) {
  return (
    <Stack
      width="100%"
      marginBottom={mgBot}
      paddingInline={['1rem', '2rem', '8rem']}
      gap="1.6rem"
      height="100%"
      justifyContent="center"
      padding="0.5rem"
    >
      <Stack
        gap="0"
        alignItems="space-between"
        padding="1.2rem"
        width="100%"
        bgGradient="linear(to-r, lpink, lorange)"
        borderRadius="24px"
        justifyContent="space-between"
        height="fit-content"
      >
        <Image alignSelf="center" src="/bigsisicon.png" alt="Description of the image" style={{ maxWidth: '100px', maxHeight: '100px' }} />
        <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
          <Heading fontSize="1.6rem" color="white" textShadow="0 1px 2px rgba(0, 0, 10, 0.2)">
            Big Sister is here to help!
          </Heading>
          <Button variant="hotpink" paddingInline="36px" gap="0.5rem">
            Start
            <Icon as={LuArrowRight} boxSize="1.0rem" />
          </Button>
        </Stack>
      </Stack>
      <Stack>
        <Flex width="100%" justifyContent="space-between">
          <Heading fontSize="md" fontWeight="700">
            Recommended topics
          </Heading>
          <Text fontSize="sm" fontWeight="700" color="hotpink">
            View all
          </Text>
        </Flex>
        <Flex gap="0.5rem" overflow="hidden">
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
          <Heading fontSize="md" fontWeight="700">
            Clinics near you
          </Heading>
          <Text fontSize="sm" fontWeight="700" color="hotpink">
            View all
          </Text>
        </Flex>
        <Flex gap="0.5rem" overflow="hidden">
          <NearbyClinicBox number="604 739 9087" title="Vancouver Sunnyside Clinic" desc="1.6 km" image="/Rectangle 22 (1).png" />
          <NearbyClinicBox number="778 329 1299" title="Planned Parenthood" desc="2.4 km" image="/Rectangle 22.png" />
          <NearbyClinicBox number="604 739 9087" title="Vancouver Sunnyside Clinic" desc="1.6 km" image="/Rectangle 22 (1).png" />
          <NearbyClinicBox number="778 329 1299" title="Planned Parenthood" desc="2.4 km" image="/Rectangle 22.png" />
        </Flex>
      </Stack>
    </Stack>
  );
}

export default Landing;
