import { DIVIDE, MULTYPLY, Operators, REST, SUM } from './types';

interface Params {
  hasJoin?: Operators;
  index: number;
  value: number;
  accumulator: number;
}

export const mathOperations = ({ hasJoin, index, value, accumulator }: Params): number => {
  let acc = accumulator;
  if (hasJoin) {
    if (![DIVIDE, MULTYPLY, REST, SUM].includes(hasJoin))
      throw new Error(`Invalid join to type number, use: <${SUM} | ${REST} | ${DIVIDE}>`);
    if (hasJoin === SUM) {
      if (index === 0) acc = value;
      else acc = acc + value;
    }
    if (hasJoin === REST) {
      if (index === 0) acc = value;
      else acc = acc - value;
    }
    if (hasJoin === DIVIDE) {
      if (index === 0) acc = value;
      else acc = acc / value;
    }
    if (hasJoin === MULTYPLY) {
      if (index === 0) acc = value;
      else acc = acc * value;
    }
  } else acc = value;
  return acc;
};
