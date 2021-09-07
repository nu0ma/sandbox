import { Box, Text } from '@chakra-ui/react';
import { useAuth } from '@/context/useAuth';

export const Logout = () => {
  const { signOutUser } = useAuth();
  return (
    <Box>
      <Text onClick={() => signOutUser()}>Sign out</Text>
    </Box>
  );
};
