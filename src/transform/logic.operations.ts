import { AND_BOOLEAN, Operators, OR_BOOLEAN } from './types';

interface Params {
  hasJoin?: Operators;
  value: boolean;
  accumulator: boolean;
}

export const logicOperation = ({ hasJoin, value, accumulator }: Params): boolean => {
  let acc = accumulator;
  if (hasJoin) {
    if (![AND_BOOLEAN, OR_BOOLEAN].includes(hasJoin))
      throw new Error(`Invalid join to type boolean, use: <${AND_BOOLEAN} | ${OR_BOOLEAN}>`);
    if (hasJoin === AND_BOOLEAN) acc = acc && value;
    if (hasJoin === OR_BOOLEAN) acc = acc || value;
  } else acc = value;
  return acc;
};
