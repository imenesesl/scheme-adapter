import { UserScheme } from '../scheme';
import { userTransform } from './transforms';

describe('WITHOUT STRUCTURE', () => {
  test('type => null', () => {
    const pubSub = userTransform(null);
    expect(JSON.stringify(pubSub)).toBe(JSON.stringify(UserScheme));
  });

  test('type => object', () => {
    const repository = userTransform({});
    expect(JSON.stringify(repository)).toBe(JSON.stringify(UserScheme));
  });

  test('type => array', () => {
    const owner = userTransform([]);
    expect(JSON.stringify(owner)).toBe(JSON.stringify(UserScheme));
  });

  test('type => undefined', () => {
    const pubSub = userTransform(undefined);
    expect(JSON.stringify(pubSub)).toBe(JSON.stringify(UserScheme));
  });

  test('type => boolean', () => {
    const repository = userTransform(true);
    expect(JSON.stringify(repository)).toBe(JSON.stringify(UserScheme));
  });

  test('type => number', () => {
    const owner = userTransform(0);
    expect(JSON.stringify(owner)).toBe(JSON.stringify(UserScheme));
  });

  test('type => string', () => {
    const pubSub = userTransform('');
    expect(JSON.stringify(pubSub)).toBe(JSON.stringify(UserScheme));
  });
});
