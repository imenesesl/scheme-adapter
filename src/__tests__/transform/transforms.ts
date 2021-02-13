import { transformAdapter } from '../..';
import { UserSchemaTransfrom } from '../scheme.transform';
import { User } from '../types';

export const userTransform = (user: any): User => transformAdapter<User>(user, UserSchemaTransfrom);
