import { typedKeys } from '../../core/iterator';
import { PubSub, Repository, User } from '../types';
import { ownerAdapter, pubSubAdapter, repositoryAdapter } from './adapters';

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
    const owner = ownerAdapter([]);
    const keys = typedKeys<User>(owner);
    expect(JSON.stringify(Object.keys(owner))).toBe(JSON.stringify(keys));
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
    const owner = ownerAdapter(0);
    const keys = typedKeys<User>(owner);
    expect(JSON.stringify(Object.keys(owner))).toBe(JSON.stringify(keys));
  });

  test('type => string', () => {
    const pubSub = pubSubAdapter('');
    const keys = typedKeys<PubSub>(pubSub);
    expect(JSON.stringify(Object.keys(pubSub))).toBe(JSON.stringify(keys));
  });
});
