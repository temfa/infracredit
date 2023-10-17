import { createSlice } from "@reduxjs/toolkit";
const roleSlice = createSlice({
  name: "role",
  initialState: { role: "" },
  reducers: {
    setRole: (state, { payload }) => {
      return payload;
    },
    clearRole: () => {
      return {
        role: "",
      };
    },
  },
});

const { reducer, actions } = roleSlice;
export const { setRole, clearRole } = actions;
export default reducer;
