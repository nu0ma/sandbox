import { Menu } from '@/types/menu';
import { User } from '@/types/user';
import firebase from '../firebase';
import { compareDesc, compareAsc, parseISO, format } from 'date-fns';

const db = firebase.firestore();

export const createUser = (data: User) => {
  return db.collection('users').doc(data.uid).set(data);
};

export const createMenu = (id: string, data: Menu) => {
  return db.collection('menus').add({
    ...data,
    createdAt: new Date(),
    userId: id,
  });
};

// ユーザが登録したメニューを全て取得
export const getMenuByUserId = async (userId: string) => {
  const snapShot: any = [];
  const querySnapshot = await db
    .collection('menus')
    .where('userId', '==', userId)
    .get();

  querySnapshot.forEach((doc) => {
    snapShot.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  snapShot.sort((a: any, b: any) =>
    compareAsc(parseISO(a.createdAt), parseISO(b.createdAt))
  );

  const result = snapShot.map((v) => ({
    menu: v.menu,
    weight: v.weight,
    rep: v.rep,
    createdAt: format(v.createdAt.toDate(), 'yyyy-MM-dd'),
    userId: v.userId,
  }));

  return result as Menu[];
};

// 特定のメニューのみ取得
export const getMenuByMenuName = async (name: string) => {
  const result: any = [];
  const querySnapshot = await db
    .collection('menus')
    .where('menu', '==', name)
    .get();

  querySnapshot.forEach((doc) => {
    result.push({ id: doc.id, ...doc.data() });
  });

  result.sort((a: any, b: any) =>
    compareAsc(parseISO(a.createdAt), parseISO(b.createdAt))
  );
  return result as Menu[];
};
