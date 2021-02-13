import { Scheme } from '..';
import { Owner, PubSub, Repository, User } from './types';

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
