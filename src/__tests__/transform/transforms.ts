import { transformAdapter } from '../..';
import { MathOperationsSchemeTranform, UserSchemaTransfrom } from '../scheme.transform';
import { MathOperations, User } from '../types';

export const userTransform = (user: any): User => transformAdapter<User>(user, UserSchemaTransfrom);

export const mathOperationsTransform = (mathOperations: any): MathOperations =>
  transformAdapter<MathOperations>(mathOperations, MathOperationsSchemeTranform);
