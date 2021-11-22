import { User } from '@/types/user';
import firebase from '../firebase';

const db = firebase.firestore();

export const createUser = async (data: User) => {
  return db.collection('users').doc(data.uid).set(data);
};
