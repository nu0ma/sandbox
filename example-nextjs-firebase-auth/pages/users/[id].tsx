import { MenuInput } from '@/components/Menu/MenuInput';
import { Box, Button, Link as ChakraLink } from '@chakra-ui/react';

import Link from 'next/link';

const UserPage = () => {
  return (
    <Box>
      <MenuInput />
      <Box mt={12}>
        <Link href="/users/result" passHref={true}>
          <Button>種目詳細</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default UserPage;
