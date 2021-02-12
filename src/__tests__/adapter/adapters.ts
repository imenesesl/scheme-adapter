import { adapter } from '../..';
import { PubSubScheme, RepositoryScheme, UserScheme } from '../scheme';
import { PubSub, Repository, User } from '../types';

export const pubSubAdapter = (pubSub: any): PubSub => {
  const result = adapter<PubSub>(pubSub, PubSubScheme);
  const data: PubSub = {
    ...result,
    users: result.users.map(user => userAdapter(user)),
  };
  return data;
};

export const repositoryAdapter = (repository: any): Repository => {
  const result = adapter<Repository>(repository, RepositoryScheme);
  const data: Repository = {
    ...result,
    owner: userAdapter(result.owner),
  };
  return data;
};

export const userAdapter = (user: any): User => {
  const result = adapter<User>(user, UserScheme);
  const data: User = {
    ...result,
    followers: pubSubAdapter(result.followers),
    following: pubSubAdapter(result.following),
  };
  return data;
};
