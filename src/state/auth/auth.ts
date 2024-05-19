import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface AuthState {
  user: string | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

interface SetLoginPayload {
  user: string;
  token: string;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<SetLoginPayload>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const {setLogin} = authSlice.actions;
export default authSlice.reducer;
