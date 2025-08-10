export interface UserResponseType {
  _id: string | null;
  name: string | null;
  email: string | null;
  isAcountVerified: boolean;
  createdAt: string | null;
  updatedAt: string | null;
  status?: string | null;
  __v: number | null;
  permissions: string[];
}

export interface UserListResponse {
  data: {
    users: UserResponseType[];
  };
}

export interface UserCreateResponse {
  name: string;
  email: string;
  password: string;
  address: string;
  role: string;
  mobile: string;
  gender: string;
  status: string;
}

export interface UserUpdateResponse extends UserCreateResponse {
  _id: string;
}
