import { OwnerScheme, PubSubScheme, RepositoryScheme } from '../scheme';
import { ownerAdapter, pubSubAdapter, repositoryAdapter } from './adapters';

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
    const owner = ownerAdapter([]);
    expect(JSON.stringify(owner)).toBe(JSON.stringify(OwnerScheme));
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
    const owner = ownerAdapter(0);
    expect(JSON.stringify(owner)).toBe(JSON.stringify(OwnerScheme));
  });

  test('type => string', () => {
    const pubSub = pubSubAdapter('');
    expect(JSON.stringify(pubSub)).toBe(JSON.stringify(PubSubScheme));
  });
});
