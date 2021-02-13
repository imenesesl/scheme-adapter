import { EMPTY, Operators, SPACE } from './types';

interface Params {
  hasJoin?: Operators;
  value: string;
  accumulator: string;
}

export const stringOperations = ({ hasJoin, value, accumulator }: Params): string => {
  let acc = accumulator;
  const operator = hasJoin ?? EMPTY;
  if (![EMPTY, SPACE].includes(operator)) throw new Error(`Invalid join to type string, use: <${EMPTY} | ${SPACE}>`);
  acc = acc + value + operator;
  return acc;
};
