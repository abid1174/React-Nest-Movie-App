import { User } from 'src/auth/schemas/user.schema';

export interface IMovie {
  name: string;
  category: string;
  duration: number;
  image: string;
  link: string;
  addedBy: User;
}
