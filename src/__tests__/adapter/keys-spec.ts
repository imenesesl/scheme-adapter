import { typedKeys } from '../../core/iterator';
import { PubSub, Repository, User } from '../types';
import { pubSubAdapter, repositoryAdapter, userAdapter } from './adapters';

describe('MAIN PROPERTIES', () => {
  test('type => null', () => {
    const pubSub = pubSubAdapter(null);
    const keys = typedKeys<PubSub>(pubSub);
    expect(JSON.stringify(Object.keys(pubSub))).toBe(JSON.stringify(keys));
  });

  test('type => object', () => {
    const repository = repositoryAdapter({});
    const keys = typedKeys<Repository>(repository);
    expect(JSON.stringify(Object.keys(repository))).toBe(JSON.stringify(keys));
  });

  test('type => array', () => {
    const user = userAdapter([]);
    const keys = typedKeys<User>(user);
    expect(JSON.stringify(Object.keys(user))).toBe(JSON.stringify(keys));
  });

  test('type => undefined', () => {
    const pubSub = pubSubAdapter(undefined);
    const keys = typedKeys<PubSub>(pubSub);
    expect(JSON.stringify(Object.keys(pubSub))).toBe(JSON.stringify(keys));
  });

  test('type => boolean', () => {
    const repository = repositoryAdapter(true);
    const keys = typedKeys<Repository>(repository);
    expect(JSON.stringify(Object.keys(repository))).toBe(JSON.stringify(keys));
  });

  test('type => number', () => {
    const user = userAdapter(0);
    const keys = typedKeys<User>(user);
    expect(JSON.stringify(Object.keys(user))).toBe(JSON.stringify(keys));
  });

  test('type => string', () => {
    const pubSub = pubSubAdapter('');
    const keys = typedKeys<PubSub>(pubSub);
    expect(JSON.stringify(Object.keys(pubSub))).toBe(JSON.stringify(keys));
  });
});
