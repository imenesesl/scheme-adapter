import { isArray, isMap } from '../core/validators';

export const generateDefault = (property: any): any => {
  switch (typeof property) {
    case 'boolean':
      return true;
    case 'number':
      return 0;
    case 'object':
      if (isArray(property)) return [];
      if (isMap(property)) return {};
      else return null;
    case 'string':
      return '';
    default:
      return null;
  }
};
