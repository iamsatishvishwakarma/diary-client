import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AuthState } from '../../types/auth';

const initialState: Omit<AuthState['data'], 'user'> & { signedIn: boolean } = {
  token: null,
  signedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.data.token;
      state.signedIn = true;
    },
    logout: (state) => {
      state.token = null;
      state.signedIn = false;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
