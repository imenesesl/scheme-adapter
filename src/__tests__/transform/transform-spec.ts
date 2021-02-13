import { UserScheme } from '../scheme';
import { userTransform } from './transforms';

describe('TRANSFORM STRUCTURE', () => {
  const userModel = {
    personalEmail: 'luismenesesep@gmail.com',
    status: true,
    name: 'Luis',
    lastName: 'Meneses',
  };

  test('user', () => {
    const user = userTransform(userModel);
    expect(user.name).toBe(`${userModel.name} ${userModel.lastName}`);
    expect(user.email).toBe(userModel.personalEmail);
    expect(user.isActive).toBe(userModel.status);
    expect(JSON.stringify(Object.keys(user))).toBe(JSON.stringify(Object.keys(UserScheme)));
  });
});
