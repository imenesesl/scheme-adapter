# scheme-adapter

#### `Super lightweight package to manage your models with schemes`

- ## Scheme - adapter

```ts
export declare type Scheme<M> = {
  [P in keyof Required<M>]: M[P];
};

export declare const adapter: <M>(item: any, schema: Scheme<M>) => M;
```

Set your default values using a base interface

_The schema requires you to define all the properties_

#### Example

```ts
import { adapter, Scheme } from 'scheme-adapter';

export interface User {
  name: string;
  email: string;
  isActive: boolean;
}

export const UserScheme: Scheme<User> = {
  email: 'luismenesesep@gmail.com',
  isActive: false,
  name: '',
};

export const userAdapter = (user: any): User => adapter<User>(user, UserScheme);

// in
userAdapter({ name: 'Luis Meneses' });

// out
{
    email: 'luismenesesep@gmail.com',
    isActive: false,
    name: 'Luis Meneses',
}
```

- ## SchemeTransform - transformAdapter

```ts
export declare type Operators = '' | ' ' | 'and' | 'or' | 'join-array' | 'join-object' | 'sum' | 'rest' | 'divide' | 'multiply';

interface TransformPayload<M, P extends keyof M> {
  value: M[P];
  transforms: Array<string>;
  join?: Operators;
}

export declare type SchemeTransform<M> = {
  [P in keyof Required<M>]: TransformPayload<M, P>;
};

export declare const transformAdapter: <M>(item: any, schema: SchemeTransform<M>) => M;
```

Define their default values using a base interface and the different properties in a standard model

Each property provide three options by TransformPayload where:

- `value`: Default value
- `transforms`: List of properties to join
- `join`: Operator to join properties

⚠️ Warning

In this version the `join` property only works to operations with booleans, numbers, arrays, maps and strings, if you need more operations, it is suggested that you perform these operations separately.

_The schema requires you to define all the properties_

#### Example #1 - strings

```ts
import { SchemeTransform, transformAdapter } from 'scheme-adapter';

export interface User {
  name: string;
  email: string;
  isActive: boolean;
}

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

export const userTransform = (user: any): User => transformAdapter<User>(user, UserSchemaTransfrom);

// in
userTransform({
    personalEmail: 'luismenesesep@gmail.com',
    name: 'Luis',
    lastName: 'Meneses',
  });

// out
{
    email: 'luismenesesep@gmail.com',
    isActive: false,
    name: 'Luis Meneses',
}
```

#### Example #2 - numbers

```ts
import { SchemeTransform, transformAdapter } from 'scheme-adapter';

export interface MathOperations {
  sum: number;
  rest: number;
  divided: number;
  multiply: number;
}

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

export const mathOperationsTransform = (mathOperations: any): MathOperations =>
  transformAdapter<MathOperations>(mathOperations, MathOperationsSchemeTranform);

// in
mathOperationsTransform({
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
    CurrentYear: 2021,
    BirthDate: 1995,
    DaysPerYear: 365,
    MonthsPerYear: 12,
    HoursPerDay: 24,
  });

// out
{
    divided: 1.2673611111111112,
    rest: 26,
    sum: 365,
    multiply: 8760,
}
```

#### Example #3 - booleans

```ts
import { SchemeTransform, transformAdapter } from 'scheme-adapter';

export interface BooleanOperations {
  isPremium: boolean;
  isFreePremium: boolean;
}

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

export const booleanOperationsTransform = (booleanOperations: any): BooleanOperations =>
  transformAdapter<BooleanOperations>(booleanOperations, BooleanOperationsSchemeTranform);

// in
booleanOperationsTransform({
    isActive: true,
    isPremium: false,
    isCertificated: true,
  });

// out
{
    isFreePremium: true,
    isPremium: false,
}
```

#### Example #3 - maps

```ts
import { SchemeTransform, transformAdapter } from 'scheme-adapter';

export interface MapOperations {
  user: User;
  contact: Contact;
  owner: User;
}

export const MapOperationsSchemeTranform: SchemeTransform<MapOperations> = {
  contact: {
    transforms: ['location', 'contact'],
    join: 'join-object',
    value: {
      country: '',
      phone: '',
    },
  },
  user: {
    transforms: ['status', 'user', 'contact'],
    join: 'join-object',
    value: {
      email: '',
      isActive: false,
      name: '',
    },
  },
  owner: {
    transforms: ['provider'],
    join: 'join-object',
    value: {
      email: '',
      isActive: false,
      name: '',
    },
  },
};

export const mapOperationsTransform = (mapOperations: any): MapOperations =>
  transformAdapter<MapOperations>(mapOperations, MapOperationsSchemeTranform);

// in
mapOperationsTransform({
    location: {
      country: 'Colombia',
      code: '+57',
    },
    contact: {
      phone: '0000000000',
      email: 'luismenesesep@gmail.com',
    },
    status: {
      isActive: true,
    },
    user: {
      name: 'Luis',
      lastName: 'Meneses',
    },
    provider: {
      email: 'org@gmail.com',
      isActive: true,
      name: 'ORG',
    },
  });

// out
{
    contact: { country: 'Colombia', phone: '0000000000' },
    user: { email: 'luismenesesep@gmail.com', isActive: true, name: 'Luis' },
    owner: { email: 'org@gmail.com', isActive: true, name: 'ORG' },
}
```

#### Example #3 - arrays

```ts
import { SchemeTransform, transformAdapter } from 'scheme-adapter';

export interface ArrayOperations {
  users: Array<User>;
}

export const ArrayOperationsSchemeTranform: SchemeTransform<ArrayOperations> = {
  users: {
    transforms: ['premium', 'free', 'freemium'],
    join: 'join-array',
    value: [],
  },
};

export const arrayOperationsTransform = (arrayOperations: any): ArrayOperations =>
  transformAdapter<ArrayOperations>(arrayOperations, ArrayOperationsSchemeTranform);

// in
arrayOperationsTransform({
    premium: Array.from(Array(10).keys()).map(user => userAdapter(user)),
    free: Array.from(Array(10).keys()).map(user => userAdapter(user)),
    freemium: Array.from(Array(10).keys()).map(user => userAdapter(user)),
  });

// out
{
    users: [ {...1}, {...2}, ..., {...30} ],
}
```

## Get Started

- Add the following in the dependencies of your package.json

```bash
npm install scheme-adapter
```

- Ready to use

```ts
import { adapter, Scheme, SchemeTransform, transformAdapter } from 'scheme-adapter';
```
