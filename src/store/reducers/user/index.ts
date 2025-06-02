import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, InitialStateType } from '@/store/reducers/user/initialState.ts';

const userSlice = createSlice({
  initialState: initialState,
  name: 'user',
  reducers: {
    setUser(state, action: PayloadAction<InitialStateType>) {
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
