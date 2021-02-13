import { SchemeTransform } from '../';
import { User } from './types';

export const UserSchemaTransfrom: SchemeTransform<User> = {
  email: {
    value: '',
    transforms: ['personalEmail'],
  },
  isActive: {
    transforms: ['status'],
    value: false,
  },
  name: {
    transforms: ['name', 'lastName'],
    join: ' ',
    value: '',
  },
};
