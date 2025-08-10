import type { UserResponseType } from './response/user';

export interface SignInPayload {
  username: string;
  password: string;
}
export interface AuthState {
  data: {
    token: string | null;
    user: UserResponseType;
  };
}
