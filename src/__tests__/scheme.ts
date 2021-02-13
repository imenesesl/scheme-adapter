import { Scheme } from '..';
import { ArrayOperations, BooleanOperations, MapOperations, MathOperations, Owner, PubSub, Repository, User } from './types';

export const RepositoryScheme: Scheme<Repository> = {
  isActive: false,
  name: '',
  owner: {
    isActive: false,
    email: '',
    name: '',
    followers: {
      users: [],
      count: 0,
    },
    following: {
      users: [],
      count: 0,
    },
  },
};

export const PubSubScheme: Scheme<PubSub> = {
  users: [],
  count: 0,
};

export const OwnerScheme: Scheme<Owner> = {
  isActive: false,
  email: '',
  name: '',
  followers: {
    users: [],
    count: 0,
  },
  following: {
    users: [],
    count: 0,
  },
};

export const UserScheme: Scheme<User> = {
  email: '',
  isActive: false,
  name: '',
};

export const MathOperationsScheme: Scheme<MathOperations> = {
  divided: 0,
  rest: 0,
  sum: 0,
  multiply: 0,
};

export const MapOperationsScheme: Scheme<MapOperations> = {
  contact: {
    country: '',
    phone: '',
  },
  user: {
    email: '',
    isActive: false,
    name: '',
  },
  owner: {
    email: '',
    isActive: false,
    name: '',
  },
};

export const ArrayOperationsScheme: Scheme<ArrayOperations> = {
  users: [],
};

export const BooleanOperationsScheme: Scheme<BooleanOperations> = {
  isFreePremium: false,
  isPremium: false,
};
