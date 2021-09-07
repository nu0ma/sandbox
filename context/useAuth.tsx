import { useRouter } from 'next/router';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import firebase from '../firebase';
import { createUser } from '@/lib/db';
import { User } from '@/types/user';

type AuthContextType = ReturnType<typeof useProvideAuth>;

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState<User | null>();
  const router = useRouter();

  const formatUser = (rawUser: firebase.User | null): User | null => {
    if (rawUser && rawUser.email && rawUser.displayName) {
      return {
        uid: rawUser.uid,
        email: rawUser.email,
        name: rawUser.displayName,
      };
    } else {
      return null;
    }
  };

  const handleUser = (user: User | null) => {
    if (user) {
      setUser(user);
      createUser(user);
      router.push(`/users/${user.uid}`);
    } else {
      setUser(null);
      router.push('/');
    }
  };

  const signInWithGoogle = async () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        handleUser(formatUser(res.user));
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      handleUser(formatUser(user));
    });
    return () => unsubscribe();
  }, []);

  const signOutUser = async () => {
    router.push('/');
    firebase.auth().signOut();
    setUser(null);
  };

  return {
    user,
    signInWithGoogle,
    signOutUser,
  };
};
