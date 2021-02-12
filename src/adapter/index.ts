import { Scheme, typedKeys } from '../core';

export const adapter = <M>(o: any, schema: Scheme<M>): M => {
  const result: any = {};
  typedKeys(schema).forEach(key => {
    if (o) result[key] = o[key] ?? schema[key];
    else result[key] = schema[key];
  });
  return result as M;
};
