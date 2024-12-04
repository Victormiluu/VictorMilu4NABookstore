export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
  }

  const users: User[] = [];

  export const UserModel = {
    findOne: (email: string) => users.find(user => user.email === email),
    save: (user: User) => {
      users.push(user);
      return user;
    }
  };