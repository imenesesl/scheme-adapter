import { isArray, isValid, SchemeTransform, typedKeys } from '../core';
import { generateDefault } from './generator';
import { logicOperation } from './logic.operations';
import { mathOperations } from './math.operations';
import { objectOperations } from './object.operations';
import { stringOperations } from './string.operations';

export const transformAdapter = <M>(item: any, schema: SchemeTransform<M>): M => {
  const result: any = {};
  typedKeys(schema).forEach(key => {
    if (isValid(item)) {
      let acc: any = generateDefault(schema[key].value);
      const hasJoin = schema[key]?.join;
      const model = schema[key].value;

      schema[key].transforms.forEach((transform, index) => {
        const value = item[transform];

        if (value) {
          if (typeof value === 'boolean') acc = logicOperation({ hasJoin, value, accumulator: acc });
          if (typeof value === 'number') acc = mathOperations({ hasJoin, value, accumulator: acc, index });
          if (typeof value === 'object') {
            if (isArray(value)) {
              const result = objectOperations({ hasJoin, value, accumulator: acc, model }) as Array<any>;
              acc = [...acc, ...result];
            } else acc = objectOperations({ hasJoin, value, accumulator: acc, model });
          }
          if (typeof value === 'string') acc = stringOperations({ hasJoin, value, accumulator: acc });
        } else acc = schema[key].value;
      });
      result[key] = hasJoin && typeof schema[key].value === 'string' ? acc.substring(0, acc.length - 1) : acc;
    } else result[key] = schema[key].value;
  });
  return result as M;
};
