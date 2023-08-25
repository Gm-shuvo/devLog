import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Tiến Đạt", email: "t@gmail.com" },
  { id: "2", name: "Tiến Đạt 2", email: "g@gmail.com" },
  { id: "3", name: "Tiến Đạt 3", email: "s@gmail.com" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
