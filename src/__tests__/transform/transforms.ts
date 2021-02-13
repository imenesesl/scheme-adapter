import { transformAdapter } from '../..';
import {
  ArrayOperationsSchemeTranform,
  BooleanOperationsSchemeTranform,
  MapOperationsSchemeTranform,
  MathOperationsSchemeTranform,
  UserSchemaTransfrom,
} from '../scheme.transform';
import { ArrayOperations, BooleanOperations, MapOperations, MathOperations, User } from '../types';

export const userTransform = (user: any): User => transformAdapter<User>(user, UserSchemaTransfrom);

export const mathOperationsTransform = (mathOperations: any): MathOperations =>
  transformAdapter<MathOperations>(mathOperations, MathOperationsSchemeTranform);

export const mapOperationsTransform = (mapOperations: any): MapOperations =>
  transformAdapter<MapOperations>(mapOperations, MapOperationsSchemeTranform);

export const arrayOperationsTransform = (arrayOperations: any): ArrayOperations =>
  transformAdapter<ArrayOperations>(arrayOperations, ArrayOperationsSchemeTranform);

export const booleanOperationsTransform = (booleanOperations: any): BooleanOperations =>
  transformAdapter<BooleanOperations>(booleanOperations, BooleanOperationsSchemeTranform);
