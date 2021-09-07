import { Box, CSSReset, Flex } from '@chakra-ui/react';

import { BottomNavigation } from '@/components/BottomNavigation';
import { Header } from '@/components/Header';

export const Layout = ({ children }: any) => {
  return (
    <Box>
      <CSSReset />
      <Flex flexDirection="column" minH="100vh" minW="100vw">
        <Header />
        <Box flexGrow={1} px={2}>
          <main>{children}</main>
        </Box>
        <BottomNavigation />
      </Flex>
    </Box>
  );
};
