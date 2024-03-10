import { Flex, Text, Stack, Image, Heading, Button, Icon } from '@chakra-ui/react';
import React from 'react';
import { LuArrowRight, LuBookmark, LuMoreHorizontal } from 'react-icons/lu';

interface TopicBoxProps {
  desc: string;
  title: string;
  width: string;
}

function TopicBox({ desc, title, width }: TopicBoxProps) {
  return (
    <Stack gap="1rem" width={width} padding="1rem" bg="white" border="1px solid rgba(0, 0, 0, 0.20)" borderRadius="24px">
      <Stack direction="row" justifyContent="space-between">
        <Heading fontSize="md" noOfLines={2} maxWidth="85%">
          {title}
        </Heading>
        <LuMoreHorizontal width="1rem" height="1rem" />
      </Stack>
      <Text fontSize="sm" noOfLines={3}>
        {desc}
      </Text>
      <Flex justifyContent="space-between">
        <Flex gap="0.5rem">
          <Button fontSize="sm" padding="0" variant="white" gap="0.2rem">
            <LuBookmark color="hotpink" width="md" height="md" />
            Save
          </Button>
          <Image alignSelf="center" src="/Frame 1707478436.png" alt="Description of the image" style={{ maxWidth: '70px', maxHeight: '100px' }} />
        </Flex>
        <Button fontSize="sm" variant="hotpink" gap="0.2rem">
          Read more
          <Icon as={LuArrowRight} boxSize="1.0rem" />
        </Button>
      </Flex>
    </Stack>
  );
}

export default TopicBox;
