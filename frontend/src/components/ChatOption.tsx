import { Flex, Text, Stack, Icon } from '@chakra-ui/react';
import { MdSupportAgent } from 'react-icons/md';
import { FaWandMagicSparkles } from 'react-icons/fa6';

interface ChatOptionProps {
  desc: string;
  title: string;
  hasIcon: boolean;
}

function ChatOption({ desc, title, hasIcon }: ChatOptionProps) {
  return (
    <Flex
      padding="1rem"
      justifyContent="center"
      gap="0.5rem"
      bg="white"
      alignItems="center"
      borderRadius="24px"
      height="78px"
      border="1px solid rgba(0, 0, 0, 0.20)"
    >
      <Flex justifyContent="center" alignItems="center" borderRadius="4px" width="36px" height="36px" border="1px solid rgba(0, 0, 0, 0.20)">
        {hasIcon && (
          <Flex justifyContent="center" alignItems="center" borderRadius="4px" width="36px" height="36px" border="1px solid rgba(0, 0, 0, 0.20)">
            <MdSupportAgent color="hotpink" size="1.6rem" />
          </Flex>
        )}
        {!hasIcon && (
          <Flex justifyContent="center" alignItems="center" borderRadius="4px" width="36px" height="36px" border="1px solid rgba(0, 0, 0, 0.20)">
            <FaWandMagicSparkles color="hotpink" size="1.6rem" />
          </Flex>
        )}
      </Flex>
      <Stack gap="0" textAlign="left">
        <Text fontWeight="800" fontSize="md">
          {title}
        </Text>
        <Text color="black" opacity="0.6" fontSize="sm">
          {desc}
        </Text>
      </Stack>
    </Flex>
  );
}

export default ChatOption;
