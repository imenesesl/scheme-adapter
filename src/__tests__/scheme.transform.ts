import { SchemeTransform } from '../';
import { ArrayOperations, BooleanOperations, MapOperations, MathOperations, User } from './types';

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

export const MapOperationsSchemeTranform: SchemeTransform<MapOperations> = {
  contact: {
    transforms: ['location', 'contact'],
    join: 'join-map',
    value: {
      country: '',
      phone: '',
    },
  },
  user: {
    transforms: ['status', 'user', 'contact'],
    join: 'join-map',
    value: {
      email: '',
      isActive: false,
      name: '',
    },
  },
  owner: {
    transforms: ['provider'],
    join: 'join-map',
    value: {
      email: '',
      isActive: false,
      name: '',
    },
  },
};

export const ArrayOperationsSchemeTranform: SchemeTransform<ArrayOperations> = {
  users: {
    transforms: ['premium', 'free', 'freemium'],
    join: 'join-array',
    value: [],
  },
};

export const BooleanOperationsSchemeTranform: SchemeTransform<BooleanOperations> = {
  isFreePremium: {
    transforms: ['isActive', 'isCertificated'],
    join: 'or',
    value: false,
  },
  isPremium: {
    transforms: ['isActive', 'isPremium', 'isCertificated'],
    join: 'and',
    value: false,
  },
};
