export const typedKeys = <M>(model: M): (keyof M)[] => Object.keys(model) as (keyof M)[];
