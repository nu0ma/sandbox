import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { Login } from '@/components/Login';

const Home: NextPage = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
      flexDirection="column"
      minH="lg"
    >
      <Text mb={8}>Home Page</Text>
      <Box>
        <Login />
      </Box>
    </Flex>
  );
};

export default Home;
