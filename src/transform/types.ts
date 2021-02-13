export const EMPTY = '';
export const SPACE = ' ';

export const AND_BOOLEAN = 'and';
export const OR_BOOLEAN = 'or';

export const JOIN_ARRAY = 'join-array';
export const JOIN_OBJECT = 'join-object';

export const SUM = 'sum';
export const REST = 'rest';
export const DIVIDE = 'divide';
export const MULTYPLY = 'multiply';

export type Operators =
  | typeof EMPTY
  | typeof SPACE
  | typeof AND_BOOLEAN
  | typeof OR_BOOLEAN
  | typeof JOIN_ARRAY
  | typeof JOIN_OBJECT
  | typeof SUM
  | typeof REST
  | typeof DIVIDE
  | typeof MULTYPLY;
