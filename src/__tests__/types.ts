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

export interface MathOperations {
  sum: number;
  rest: number;
  divided: number;
  multiply: number;
}

export interface Contact {
  phone: string;
  country: string;
}

export interface MapOperations {
  user: User;
  contact: Contact;
  owner: User;
}

export interface ArrayOperations {
  users: Array<User>;
}

export interface BooleanOperations {
  isPremium: boolean;
  isFreePremium: boolean;
}
