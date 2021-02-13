export const typedKeys = <M>(model: M): (keyof M)[] => Object.keys(model) as (keyof M)[];
export const isValid = (model: any): boolean =>
  typeof model === 'object' && model !== null && !Array.isArray(model) && Object.keys(model).length > 0;
