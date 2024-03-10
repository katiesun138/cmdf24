import TopicBox from './TopicBox';
import React from 'react';
import { LuKeyboard, LuSend } from 'react-icons/lu';
import { Stack } from '@chakra-ui/react';

function Forum() {
  return (
    <Stack width="100%" height="100%" justifyContent="center" padding="0.5rem">
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
    </Stack>
  );
}

export default Forum;
