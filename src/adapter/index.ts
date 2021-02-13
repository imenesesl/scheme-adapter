import { isValid, Scheme, typedKeys } from '../core';

export const adapter = <M>(item: any, schema: Scheme<M>): M => {
  const result: any = {};
  typedKeys(schema).forEach(key => {
    if (isValid(item)) result[key] = item[key] ?? schema[key];
    else result[key] = schema[key];
  });
  return result as M;
};
