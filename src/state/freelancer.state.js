import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  token: null,
  posts: null,
  information: null,
};

export const freelancerSlice = createSlice({
  name: "freelancer",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.data = action.payload.data;
      state.token = action.payload.token;
      state.information = action.payload.information;
    },
    setLogout: (state) => {
      state.data = null;
      state.token = null;
      state.information = null;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id == action.payload.post._id) return action.payload.post;
      });
      state.posts = updatedPosts;
    },
    setInformation: (state, action) => {
      state.information = action.payload.information;
    },
  },
});

export const { setLogin, setLogout, setPost, setInformation } =
  freelancerSlice.actions;
export default freelancerSlice.reducer;
