import { isValid, SchemeTransform, typedKeys } from '../core';

const EMPTY = '';

export const transformAdapter = <M>(item: any, schema: SchemeTransform<M>): M => {
  const result: any = {};
  typedKeys(schema).forEach(key => {
    if (isValid(item)) {
      let acc: any = EMPTY;
      schema[key].transforms.forEach(transform => {
        const value = item[transform];
        if (value) {
          if (typeof value === 'boolean') acc = Boolean(value);
          else acc = acc + value + (schema[key]?.join ?? EMPTY);
        } else acc = schema[key].value;
      });
      result[key] = schema[key]?.join ? acc.substring(0, acc.length - 1) : acc;
    } else result[key] = schema[key].value;
  });
  return result as M;
};
