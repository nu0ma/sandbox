import { getData } from '@/lib/api';
import { Album } from '@/types/album';
import { User } from '@/types/user';

export const getAlbums = async (id: string) => {
  const [user, albums]: [User, Album[]] = await Promise.all([
    getData<User>('/users/' + id),
    getData<Album[]>('/albums?' + 'user=' + id),
  ]);

  const result = albums.map((v) => ({
    title: v.title,
    userName: user.name,
    email: user.email,
  }));

  return result;
};
