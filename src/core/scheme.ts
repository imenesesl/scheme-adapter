import { Operators } from '../transform/types';
export type Scheme<M> = {
  [P in keyof Required<M>]: M[P];
};

interface TransformPayload<M, P extends keyof M> {
  value: M[P];
  transforms: Array<string>;
  join?: Operators;
}

export type SchemeTransform<M> = {
  [P in keyof Required<M>]: TransformPayload<M, P>;
};
