import { User } from '@/types/user';
import firebase from '../firebase';

const db = firebase.firestore();

export const createUser = (data: User) => {
  return db.collection('users').add(data);
};
