import { useAuth } from '@/context/useAuth';
import { Box, Text } from '@chakra-ui/react';

const UserPage = () => {
  const { user } = useAuth();
  return (
    <Box>
      <Text>User Name：{user?.name}</Text>
    </Box>
  );
};

export default UserPage;
