export interface UserCreateRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  status: string;
  mobile?: string; // Optional field
  gender?: string; // Optional field
}

export interface UserDetailsRequest {
  _id: string;
}

export interface UserUpdateRequest extends UserCreateRequest {
  _id: string;
}
