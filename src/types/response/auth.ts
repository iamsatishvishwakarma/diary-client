import type { UserResponseType } from './user';

export interface LoginResponse {
  data: {
    token: string;
    user: UserResponseType;
  };
}
