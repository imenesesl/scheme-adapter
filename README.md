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
interface TransformPayload<M, P extends keyof M> {
  value: M[P];
  transforms: Array<string>;
  join?: string;
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
- `join`: Operator to join properties defaults to an empty string

⚠️ Warning

In this version the `join` property only works to join strings, if you need operations between numbers, booleans and other types, it is suggested that you perform these operations separately.

_The schema requires you to define all the properties_

#### Example

```ts
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

## Get Started

- Add the following in the dependencies of your package.json

```bash
npm install scheme-adapter
```

- Ready to use

```ts
import { adapter, Scheme, SchemeTransform, transformAdapter } from 'scheme-adapter';
```
