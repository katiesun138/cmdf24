import { Flex, Text, Stack, Image, Heading, Button } from '@chakra-ui/react';
import React from 'react';
import { LuBookmark, LuMoreHorizontal } from 'react-icons/lu';

interface TopicBoxProps {
  desc: string;
  title: string;
}

function TopicBox({ desc, title }: TopicBoxProps) {
  return (
    <Stack gap="1rem" width="300px" padding="1rem" bg="white" border="1px solid rgba(0, 0, 0, 0.20)" borderRadius="24px">
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
        <Button fontSize="sm" variant="white" gap="0.2rem">
          <LuBookmark color="hotpink" width="md" height="md" />
          Save
        </Button>
        <Image alignSelf="center" src="/Frame 1707478436.png" alt="Description of the image" style={{ maxWidth: '70px', maxHeight: '100px' }} />
        <Button fontSize="sm" variant="hotpink" gap="0.2rem">
          Read more
        </Button>
      </Flex>
    </Stack>
  );
}

export default TopicBox;
