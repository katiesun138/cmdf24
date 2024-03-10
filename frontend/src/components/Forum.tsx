import TopicBox from './TopicBox';
import React from 'react';
import { LuSettings2, LuPenSquare } from 'react-icons/lu';
import { Stack, Image, Flex, Button, Heading, Icon } from '@chakra-ui/react';

function Forum() {
  return (
    <Stack width="100%" paddingInline={['1rem', '2rem', '8rem']} height="100%" justifyContent="center" padding="0.5rem">
      <Flex justifyContent="space-between" alignItems="center" width="100%">
        <Heading fontSize="lg">BigSister</Heading>
        <Flex gap="0.5rem">
          <Button paddingInline="0" color="hotpink">
            <Icon as={LuSettings2} boxSize="1.2rem" />
          </Button>
          <Button paddingInline="0" color="hotpink">
            <Icon as={LuPenSquare} boxSize="1.2rem" />
          </Button>
        </Flex>
      </Flex>
      <Stack
        gap="0"
        alignItems="center"
        padding="1.2rem"
        width="100%"
        bgGradient="linear(to-r, lpink, lorange)"
        borderRadius="24px"
        justifyContent="center"
        height="fit-content"
      >
        <Image alignSelf="center" src="/bigsisicon.png" alt="Description of the image" style={{ maxWidth: '100px', maxHeight: '100px' }} />
        <Heading fontSize="1.6rem" color="white" textShadow="0 1px 2px rgba(0, 0, 10, 0.2)">
          Big Sister is here to help!
        </Heading>
      </Stack>
      <TopicBox
        width="100%"
        desc="Post-menstrual syndrome, also known as premenstrual dysphoric disorder (PMDD), refers to a condition where individuals experience severe
        emotional and physical symptoms following their menstrual period. It can include mood swings, irritability, depression, anxiety, fatigue, and
        physical discomfort."
        title="How to Deal with Post Menstrual Syndrome"
      />
      <TopicBox
        width="100%"
        desc="In the complex landscape of intimate relationships, the dynamics between partners can sometimes take a harmful turn, leading to emotional, psychological, or physical abuse. Recognizing the signs of an abusive relationship is crucial for individuals to protect themselves and seek the support they need. Abuse can manifest in various forms, often insidious and difficult to detect at first glance. Understanding these signs can be the first step towards breaking free from the cycle of abuse and seeking healing."
        title="Recognizing the Signs of an Abusive Relationship: A Vital Step Towards Safety and Healing"
      />
      <TopicBox
        width="100%"
        desc="In the quest for gender equality, women continue to face numerous challenges in the workplace, one of the most prevalent being gender bias. Despite advancements in women's rights and increased awareness of diversity and inclusion, gender discrimination persists in many organizations, hindering women's professional growth and opportunities for advancement."
        title="Breaking the Glass Ceiling: Overcoming Gender Bias in the Workplace"
      />
      <TopicBox
        width="100%"
        desc="In today's fast-paced and ever-changing world, women are navigating a myriad of challenges and opportunities that shape their experiences of womanhood. From societal expectations to personal aspirations, the journey of womanhood is multifaceted, nuanced, and deeply personal. In this article, we explore the complexities of modern womanhood and the importance of embracing empowerment and self-discovery."
        title="Navigating the Complexities of Modern Womanhood: Embracing Empowerment and Self-Discovery"
      />
      <TopicBox
        width="100%"
        desc="In the complex landscape of intimate relationships, the dynamics between partners can sometimes take a harmful turn, leading to emotional, psychological, or physical abuse. Recognizing the signs of an abusive relationship is crucial for individuals to protect themselves and seek the support they need. Abuse can manifest in various forms, often insidious and difficult to detect at first glance. Understanding these signs can be the first step towards breaking free from the cycle of abuse and seeking healing."
        title="Recognizing the Signs of an Abusive Relationship: A Vital Step Towards Safety and Healing"
      />
    </Stack>
  );
}

export default Forum;
