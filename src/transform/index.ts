import { isValid, SchemeTransform, typedKeys } from '../core';
import { isArray, isMap } from '../core/validators';
import { generateDefault } from './generator';
import { AND_BOOLEAN, DIVIDE, EMPTY, JOIN_ARRAY, JOIN_OBJECT, MULTYPLY, OR_BOOLEAN, REST, SPACE, SUM } from './types';

export const transformAdapter = <M>(item: any, schema: SchemeTransform<M>): M => {
  const result: any = {};
  typedKeys(schema).forEach(key => {
    if (isValid(item)) {
      let acc: any = generateDefault(schema[key].value);
      const hasJoin = schema[key]?.join;

      schema[key].transforms.forEach((transform, index) => {
        const value = item[transform];
        if (value) {
          //boolean
          if (typeof value === 'boolean') {
            if (hasJoin) {
              if (![AND_BOOLEAN, OR_BOOLEAN].includes(hasJoin))
                throw new Error(`Invalid join to type boolean, use: <${AND_BOOLEAN} | ${OR_BOOLEAN}>`);
              if (hasJoin === AND_BOOLEAN) acc = acc && value;
              if (hasJoin === OR_BOOLEAN) acc = acc || value;
            }
            //without join
            else acc = value;
          }

          //number
          if (typeof value === 'number') {
            if (hasJoin) {
              if (![SUM, REST, DIVIDE, MULTYPLY].includes(hasJoin))
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
            }
            //without join
            else acc = value;
          }

          if (typeof value === 'object') {
            //array
            if (isArray(value)) {
              if (hasJoin) {
                if (![JOIN_ARRAY].includes(hasJoin)) throw new Error(`Invalid join to type array, use: <${JOIN_ARRAY}>`);
                if (hasJoin === JOIN_ARRAY) acc = [...acc, ...value];
              }
              //without join
              else acc = value;
            }
            //map
            if (isMap(value)) {
              if (hasJoin) {
                if (![JOIN_OBJECT].includes(hasJoin)) throw new Error(`Invalid join to type map, use: <${JOIN_OBJECT}>`);
                if (hasJoin === JOIN_OBJECT) acc = { ...acc, ...value };
              }
              //without join
              else acc = value;
            }
            //null
            else acc = value;
          }

          //string
          if (typeof value === 'string') {
            const operator = hasJoin ?? EMPTY;
            if (![EMPTY, SPACE].includes(operator)) throw new Error(`Invalid join to type string, use: <${EMPTY} | ${SPACE}>`);
            acc = acc + value + operator;
          }

          //unexpected
        } else acc = schema[key].value;
      });
      result[key] = hasJoin && typeof schema[key].value === 'string' ? acc.substring(0, acc.length - 1) : acc;
    } else result[key] = schema[key].value;
  });
  return result as M;
};
