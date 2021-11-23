import { Menu } from '@/types/menu';
import { User } from '@/types/user';
import firebase from '../firebase';

const db = firebase.firestore();

export const createUser = (data: User) => {
  return db.collection('users').doc(data.uid).set(data);
};

export const createMenu = (id: string, data: Menu) => {
  return db
    .collection('menus')
    .doc(id)
    .set({ ...data, createdAt: new Date(), userId: id });
};
