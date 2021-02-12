/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { PubSubScheme, RepositoryScheme, UserScheme } from '../scheme';
import { pubSubAdapter, repositoryAdapter, userAdapter } from './adapters';

describe('TRANSFORM STRUCTURE', () => {
  const followerModel = {
    email: 'follower@any.com',
    name: 'Follower',
    following: {
      count: 0,
    },
  };

  const userModel = {
    isActive: true,
    email: 'luismenesesep@gmail.com',
    name: 'Luis Meneses',
    followers: {
      users: [followerModel],
      count: 1,
    },
  };

  const pubSubModel = {
    users: [userModel, followerModel],
    count: 2,
  };

  const repositoryModel = {
    name: 'scheme-adapter',
    owner: {
      isActive: true,
      email: 'luismenesesep@gmail.com',
      name: 'Luis Meneses',
      followers: pubSubModel,
      following: pubSubModel,
    },
  };

  test('pubSub', () => {
    const pubSub = pubSubAdapter(pubSubModel);
    expect(pubSub.users.length).toBe(pubSub.count);
    expect(JSON.stringify(Object.keys(pubSub))).toBe(JSON.stringify(Object.keys(PubSubScheme)));
  });

  test('repository', () => {
    const repository = repositoryAdapter(repositoryModel);
    expect(repository.owner.followers.users.length).toBe(repository.owner.followers.count);
    expect(repository.owner.following.users.length).toBe(repository.owner.following.count);
    expect(repository.isActive).toBe(false);
    expect(JSON.stringify(Object.keys(repository))).toBe(JSON.stringify(Object.keys(RepositoryScheme)));
  });

  test('user', () => {
    const user = userAdapter(userModel);
    expect(user.isActive).toBe(true);
    expect(user.followers.users.length).toBe(user.followers.count);
    expect(user.following.users.length).toBe(user.following.count);
    expect(user.followers.users[0].isActive).toBe(false);
    expect(JSON.stringify(Object.keys(user))).toBe(JSON.stringify(Object.keys(UserScheme)));
  });
});
