import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  IconButton,
  Text,
  Link,
  Box,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import { MdPersonOutline } from 'react-icons/md';

import { useAuth } from '@/context/useAuth';
import { Logout } from '@/components/Logout';

export const Settings: React.FC = () => {
  const { user } = useAuth();

  return (
    <Menu placement="bottom">
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<SettingsIcon />}
        variant="outline"
        _active={{ bg: '#aca995' }}
        color={useColorModeValue('gray.800', 'gray.300')}
      />

      <MenuList mr={4}>
        <MenuItem>
          <Box>
            <Text fontWeight="bold">{user?.name}</Text>
            <Text>{user?.email}</Text>
          </Box>
        </MenuItem>
        <Divider mb={2} />

        <MenuItem>
          <Box>
            <Icon mr={2} as={MdPersonOutline}></Icon>
            <Link href={`/users/${user?.uid}`}>マイページ</Link>
          </Box>
        </MenuItem>

        <MenuItem>
          <Logout />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
