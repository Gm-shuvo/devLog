import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
  posts: [
    {
      id: 1,
      title: "First Post!",
      content: "Hello!",
    },
    {
      id: 2,
      title: "Second Post",
      content: "More text",
    },
  ],
  status: "idle",
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.posts.push(action.payload);
    }
  }
});

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;