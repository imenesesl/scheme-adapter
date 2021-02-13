import { UserScheme } from '../scheme';
import { userTransform } from './transforms';

describe('TRANSFORM STRUCTURE', () => {
  const userModel = {
    personalEmail: 'luismenesesep@gmail.com',
    name: 'Luis',
    lastName: 'Meneses',
  };

  test('user', () => {
    const user = userTransform(userModel);
    expect(user.name).toBe(`${userModel.name} ${userModel.lastName}`);
    expect(user.email).toBe(userModel.personalEmail);
    expect(user.isActive).toBe(false);
    expect(JSON.stringify(Object.keys(user))).toBe(JSON.stringify(Object.keys(UserScheme)));
  });
});
