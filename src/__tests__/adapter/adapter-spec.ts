import { OwnerScheme, PubSubScheme, RepositoryScheme } from '../scheme';
import { ownerAdapter, pubSubAdapter, repositoryAdapter } from './adapters';

describe('TRANSFORM STRUCTURE', () => {
  const followerModel = {
    email: 'follower@any.com',
    name: 'Follower',
    following: {
      count: 0,
    },
  };

  const ownerModel = {
    isActive: true,
    email: 'luismenesesep@gmail.com',
    name: 'Luis Meneses',
    followers: {
      users: [followerModel],
      count: 1,
    },
  };

  const pubSubModel = {
    users: [ownerModel, followerModel],
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

  test('owner', () => {
    const owner = ownerAdapter(ownerModel);
    expect(owner.isActive).toBe(true);
    expect(owner.followers.users.length).toBe(owner.followers.count);
    expect(owner.following.users.length).toBe(owner.following.count);
    expect(owner.followers.users[0].isActive).toBe(false);
    expect(JSON.stringify(Object.keys(owner))).toBe(JSON.stringify(Object.keys(OwnerScheme)));
  });
});
