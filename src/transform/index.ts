import { SchemeTransform, typedKeys } from '../core';

const EMPTY = '';

export const transformAdapter = <M>(item: any, schema: SchemeTransform<M>): M => {
  const result: any = {};
  typedKeys(schema).forEach(key => {
    if (item) {
      let acc: string = EMPTY;
      schema[key].transforms.forEach(transform => {
        const value = item[transform];
        if (value) acc = acc + value + (schema[key]?.join ?? EMPTY);
      });
      result[key] = schema[key]?.join ? acc.substring(0, acc.length - 1) : acc;
    } else result[key] = schema[key].value;
  });
  return result as M;
};
