export interface PubSub {
  users: Array<User>;
  count: number;
}

export interface User {
  name: string;
  email: string;
  followers: PubSub;
  following: PubSub;
  isActive: boolean;
}

export interface Repository {
  owner: User;
  name: string;
  isActive: boolean;
}
