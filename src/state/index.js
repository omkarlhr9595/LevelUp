import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  posts: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id == action.payload.post._id) return action.payload.post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setLogin, setLogout, setPost } = authSlice.actions;
export default authSlice.reducer;
