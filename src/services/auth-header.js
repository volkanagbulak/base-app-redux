import { store } from "../store";

const authHeader = () => {
  const session = store.getState();
  if (session?.auth?.token) {
    return { Authorization: session.auth.token };
  } else {
    return {};
  }
};
export default authHeader;
