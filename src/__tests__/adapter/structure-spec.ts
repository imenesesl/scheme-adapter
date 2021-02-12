import { PubSubScheme, RepositoryScheme, UserScheme } from '../scheme';
import { pubSubAdapter, repositoryAdapter, userAdapter } from './adapters';

describe('WITHOUT STRUCTURE', () => {
  test('type => null', () => {
    const pubSub = pubSubAdapter(null);
    expect(JSON.stringify(pubSub)).toBe(JSON.stringify(PubSubScheme));
  });

  test('type => object', () => {
    const repository = repositoryAdapter({});
    expect(JSON.stringify(repository)).toBe(JSON.stringify(RepositoryScheme));
  });

  test('type => array', () => {
    const user = userAdapter([]);
    expect(JSON.stringify(user)).toBe(JSON.stringify(UserScheme));
  });

  test('type => undefined', () => {
    const pubSub = pubSubAdapter(undefined);
    expect(JSON.stringify(pubSub)).toBe(JSON.stringify(PubSubScheme));
  });

  test('type => boolean', () => {
    const repository = repositoryAdapter(true);
    expect(JSON.stringify(repository)).toBe(JSON.stringify(RepositoryScheme));
  });

  test('type => number', () => {
    const user = userAdapter(0);
    expect(JSON.stringify(user)).toBe(JSON.stringify(UserScheme));
  });

  test('type => string', () => {
    const pubSub = pubSubAdapter('');
    expect(JSON.stringify(pubSub)).toBe(JSON.stringify(PubSubScheme));
  });
});
