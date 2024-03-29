import TopicBox from './TopicBox';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LuSettings2, LuPenSquare, LuSend } from 'react-icons/lu';
import TinyComponent from './TinyMCE';
import { Stack, Image, Flex, Button, Heading, Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import Header from './Header';

function Forum() {
  const [contentVisible, setContentVisible] = useState(true);
  const [topics, setTopics] = useState<JSX.Element[]>([]);

  const addTopic = (desc: string, title: string): void => {
    const newTopic = <TopicBox key={topics.length + 1} width="100%" desc={desc} title={title} />;
    setTopics(prevTopics => [newTopic, ...prevTopics]); // Add the new topic to the beginning of the topics state array
  };

  useEffect(() => {
    // Logic to toggle visibility of content based on contentVisible state
    const contentElement = document.getElementById('content');
    if (contentElement) {
      contentElement.style.display = contentVisible ? 'flex' : 'none';
    }
  }, [contentVisible]);
  return (
    <Stack width="100%" maxWidth="1200px" paddingInline={['1rem', '2rem', '8rem']} height="100%" justifyContent="center" padding="0.5rem">
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
          <Input borderRadius="100px" placeholder="Ask any question..." _placeholder={{ color: 'gray.400', fontSize: 'sm' }} />
          <InputRightElement w="3.0rem">
            <Button h="2.0rem" bg="hotpink" padding="0rem" borderRadius="100px">
              <LuSend />
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button paddingInline="0" color="black" onClick={() => setContentVisible(!contentVisible)}>
          <Icon as={LuPenSquare} boxSize="1.6rem" />
        </Button>
      </Flex>
      <Flex marginBlock="0.5rem" gap="0.5rem" height={contentVisible ? 'fit-content' : 0} id="content">
        <Button variant="hotpink">Popular</Button>
        <Button color="black" bg="white" borderRadius="100px" opacity="0.87">
          Recommended
        </Button>
        <Button color="black" bg="white" borderRadius="100px" opacity="0.87">
          Health
        </Button>
        <Button color="black" bg="white" borderRadius="100px" opacity="0.87">
          Relationships
        </Button>
      </Flex>
      {contentVisible && (
        <Stack id="topics">
          {topics}
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
      )}
      {!contentVisible && <TinyComponent onClick={addTopic} backToForum={() => setContentVisible(!contentVisible)} />}
    </Stack>
  );
}

export default Forum;
