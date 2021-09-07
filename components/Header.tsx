import { Flex, HStack, Spacer, Text } from '@chakra-ui/react';

import { useAuth } from '@/context/useAuth';
import { Settings } from '@/components/Setting';
import { ThemeButton } from '@/components/ThemeButton';

export const Header = () => {
  const { user } = useAuth();
  return (
    <Flex justifyContent="flex-end" p={2}>
      <Text>Logo</Text>
      <Spacer></Spacer>
      <HStack>
        {user ? <Settings /> : <></>}

        <ThemeButton />
      </HStack>
    </Flex>
  );
};
