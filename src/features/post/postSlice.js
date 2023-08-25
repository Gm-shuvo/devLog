import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = {
  posts: [
    {
      id: 1,
      title: "First Post!",
      content: "Hello!",
      user: "gm shuvo",
      date: sub(new Date(), { minutes: 10 }).toISOString(),
      reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
      },
    },
    {
      id: 2,
      title: "Second Post",
      content: "More text",
      user: "gm shuvo",
      date: sub(new Date(), { minutes: 5 }).toISOString(),
      reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 4,
        rocket: 0,
      },
    },
  ],
  status: "idle",
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, user) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
            },
          },
        };
      },
    },
    reactionsAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    }
    
  },
});

export const selectAllPosts = (state) => state.posts;
export const selectPostById = (state, postId) => state.posts.find((post) => post.id === postId);

export const { postAdded, reactionsAdded } = postSlice.actions;

export default postSlice.reducer;
