/* eslint-disable @typescript-eslint/ban-types */
import { isArray, isMap } from '../core';
import { JOIN_ARRAY, JOIN_MAP, Operators } from './types';

interface Params {
  hasJoin?: Operators;
  value: any;
  accumulator: any;
  model: any;
}

const arrayOperator = ({ hasJoin, value, accumulator }: Params): Array<any> => {
  let acc = [...accumulator];
  if (hasJoin) {
    if (![JOIN_ARRAY].includes(hasJoin)) throw new Error(`Invalid join to type array, use: <${JOIN_ARRAY}>`);
    if (hasJoin === JOIN_ARRAY) acc = [...acc, ...value];
  } else acc = value;
  return acc;
};

const mapOperator = ({ hasJoin, value, accumulator, model }: Params): object => {
  let acc = accumulator;
  if (hasJoin) {
    if (![JOIN_MAP].includes(hasJoin)) throw new Error(`Invalid join to type map, use: <${JOIN_MAP}>`);
    if (hasJoin === JOIN_MAP) {
      acc = { ...acc, ...value };
      const data = Object.keys(model).reduce((accc, key) => ({ ...accc, [key]: acc[key] ?? model[key] }), {});
      acc = data;
    }
  } else acc = value;
  return acc;
};

export const objectOperations = ({ hasJoin, value, accumulator, model }: Params): object | [] | null => {
  let acc = accumulator;
  if (isArray(value)) {
    const result = arrayOperator({ hasJoin, value, accumulator: acc, model });
    acc = [...acc, ...result];
  }
  if (isMap(value)) acc = mapOperator({ hasJoin, value, accumulator: acc, model });
  else acc = value;
  return acc;
};
