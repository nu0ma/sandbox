import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { Index } from '@/components/Index';

const Home: NextPage = () => {
  return (
    <Box>
      <Index />
    </Box>
  );
};

export default Home;
