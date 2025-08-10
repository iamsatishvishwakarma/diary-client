import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AuthState } from '../../types/auth';
import type { UserListResponse, UserResponseType } from '../../types/response/user';

interface UserState {
  currentUser: UserListResponse['data']['users'][0];
  userList: UserResponseType[];
}

const initialState: UserState = {
  currentUser: {
    _id: null,
    name: null,
    email: null,
    role: null,
    mobile: null,
    type: null,
    address: null,
    gender: null,
    employeeId: null,
    username: null,
    createdAt: null,
    updatedAt: null,
    __v: null,
    permissions: [],
  },
  userList: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      Object.assign(state.currentUser, action.payload.data.user);
    },
    setUserList: (state, action: PayloadAction<UserListResponse>) => {
      state.userList = action.payload.data.users;
    },
    clearUser: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setUser, setUserList } = userSlice.actions;
export default userSlice.reducer;
