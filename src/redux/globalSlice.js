import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    sidebarToggle: false,
  },
  reducers: {
    sidebarToggle: (state, action) => {
      state.sidebarToggle = action.payload.value;
    },
  },
});

export const { sidebarToggle } = globalSlice.actions;

export default globalSlice.reducer;
