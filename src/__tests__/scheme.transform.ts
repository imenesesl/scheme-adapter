import { SchemeTransform } from '../';
import { MathOperations, User } from './types';

export const UserSchemaTransfrom: SchemeTransform<User> = {
  email: {
    transforms: ['personalEmail'],
    value: '',
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

export const MathOperationsSchemeTranform: SchemeTransform<MathOperations> = {
  divided: {
    transforms: ['DaysPerYear', 'MonthsPerYear', 'HoursPerDay'],
    join: 'divide',
    value: 0,
  },

  rest: {
    transforms: ['CurrentYear', 'BirthDate'],
    join: 'rest',
    value: 0,
  },
  sum: {
    transforms: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    join: 'sum',
    value: 0,
  },
  multiply: {
    transforms: ['DaysPerYear', 'HoursPerDay'],
    join: 'multiply',
    value: 0,
  },
};
