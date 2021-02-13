import { adapter } from '../..';
import { OwnerScheme, PubSubScheme, RepositoryScheme } from '../scheme';
import { Owner, PubSub, Repository } from '../types';

export const pubSubAdapter = (pubSub: any): PubSub => {
  const result = adapter<PubSub>(pubSub, PubSubScheme);
  const data: PubSub = {
    ...result,
    users: result.users.map(user => ownerAdapter(user)),
  };
  return data;
};

export const repositoryAdapter = (repository: any): Repository => {
  const result = adapter<Repository>(repository, RepositoryScheme);
  const data: Repository = {
    ...result,
    owner: ownerAdapter(result.owner),
  };
  return data;
};

export const ownerAdapter = (owner: any): Owner => {
  const result = adapter<Owner>(owner, OwnerScheme);
  const data: Owner = {
    ...result,
    followers: pubSubAdapter(result.followers),
    following: pubSubAdapter(result.following),
  };
  return data;
};
