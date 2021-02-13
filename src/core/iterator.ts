import { isMap } from './validators';
export const typedKeys = <M>(model: M): Array<keyof M> => {
  if (!isMap(model)) throw new Error('Invalid model');
  return Object.keys(model) as Array<keyof M>;
};
