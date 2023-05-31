import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  token: null,
  jobs: null,
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.data = action.payload.data;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.data = null;
      state.token = null;
    },
  },
});

export const { setLogin, setLogout, setPost } = clientSlice.actions;
export default clientSlice.reducer;
