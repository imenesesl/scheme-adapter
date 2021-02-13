/* eslint-disable @typescript-eslint/ban-types */
import { isArray, isMap } from '../core/validators';
import { JOIN_ARRAY, JOIN_OBJECT, Operators } from './types';

interface Params {
  hasJoin?: Operators;
  value: any;
  accumulator: any;
}

const arrayOperator = ({ hasJoin, value, accumulator }: Params): [] => {
  let acc = accumulator;
  if (hasJoin) {
    if (![JOIN_ARRAY].includes(hasJoin)) throw new Error(`Invalid join to type array, use: <${JOIN_ARRAY}>`);
    if (hasJoin === JOIN_ARRAY) acc = [...acc, ...value];
  } else acc = value;
  return acc;
};

const mapOperator = ({ hasJoin, value, accumulator }: Params): object => {
  let acc = accumulator;
  if (hasJoin) {
    if (![JOIN_OBJECT].includes(hasJoin)) throw new Error(`Invalid join to type map, use: <${JOIN_OBJECT}>`);
    if (hasJoin === JOIN_OBJECT) acc = { ...acc, ...value };
  } else acc = value;
  return acc;
};

export const objectOperations = ({ hasJoin, value, accumulator }: Params): object | [] | null => {
  let acc = accumulator;
  if (isArray(value)) acc = arrayOperator({ hasJoin, value, accumulator: acc });
  if (isMap(value)) acc = mapOperator({ hasJoin, value, accumulator: acc });
  else acc = value;
  return acc;
};
