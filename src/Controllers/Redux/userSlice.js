import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: [{}],
  reducers: {
    getUser: (state) => {
      state.push({ name: "Grace Akpan" });
      state.push({ name: "Mary Jane" });
    },
  },
});

export default slice.reducer;
export const { getUser } = slice.actions;
