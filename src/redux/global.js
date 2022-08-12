import { sidebarToggle } from "./globalSlice";

export const toggleChange = async (dispatch, value) => {
  dispatch(sidebarToggle(value));
};
