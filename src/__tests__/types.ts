export interface User {
  name: string;
  email: string;
  isActive: boolean;
}

export interface PubSub {
  users: Array<Owner>;
  count: number;
}

export interface Owner extends User {
  followers: PubSub;
  following: PubSub;
}

export interface Repository {
  owner: Owner;
  name: string;
  isActive: boolean;
}
