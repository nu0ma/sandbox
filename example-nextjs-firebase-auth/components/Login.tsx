import { useAuth } from '@/context/useAuth';
import { Button } from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';

export const Login = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <Button
      leftIcon={<FaGoogle />}
      size="md"
      onClick={(e) => signInWithGoogle()}
    >
      Google Login
    </Button>
  );
};
