import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  selectedUser: null,
  searchedUser: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    viewDetails: (state, action) => {
      const userId = action.payload;
      state.selectedUser = state.users.find(user => user.id === userId);
    },
    setSearchedUser: (state, action) => {
      state.searchedUser = action.payload;
    }
  },
});

export const { setUsers, viewDetails, setSearchedUser } = userSlice.actions;

export default userSlice.reducer;