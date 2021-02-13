import { typedKeys } from '../../core/iterator';
import { User } from '../types';
import { userTransform } from './transforms';

describe('MAIN PROPERTIES', () => {
  test('type => null', () => {
    const user = userTransform(null);
    const keys = typedKeys<User>(user);
    expect(JSON.stringify(Object.keys(user))).toBe(JSON.stringify(keys));
  });

  test('type => object', () => {
    const user = userTransform({});
    const keys = typedKeys<User>(user);
    expect(JSON.stringify(Object.keys(user))).toBe(JSON.stringify(keys));
  });

  test('type => array', () => {
    const user = userTransform([]);
    const keys = typedKeys<User>(user);
    expect(JSON.stringify(Object.keys(user))).toBe(JSON.stringify(keys));
  });

  test('type => undefined', () => {
    const user = userTransform(undefined);
    const keys = typedKeys<User>(user);
    expect(JSON.stringify(Object.keys(user))).toBe(JSON.stringify(keys));
  });

  test('type => boolean', () => {
    const user = userTransform(true);
    const keys = typedKeys<User>(user);
    expect(JSON.stringify(Object.keys(user))).toBe(JSON.stringify(keys));
  });

  test('type => number', () => {
    const user = userTransform(0);
    const keys = typedKeys<User>(user);
    expect(JSON.stringify(Object.keys(user))).toBe(JSON.stringify(keys));
  });

  test('type => string', () => {
    const user = userTransform('');
    const keys = typedKeys<User>(user);
    expect(JSON.stringify(Object.keys(user))).toBe(JSON.stringify(keys));
  });
});
