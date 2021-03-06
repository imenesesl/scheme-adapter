export const isMap = (value: any): boolean => value !== null && !Array.isArray(value) && Object.keys(value).length > 0;

export const isArray = (value: any): boolean => !isMap(value);

export const isValid = (model: any): boolean => typeof model === 'object' && model !== null && !isArray(model) && isMap(model);
