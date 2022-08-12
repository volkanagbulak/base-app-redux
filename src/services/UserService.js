import authHeader from "./auth-header";
import request from "./request";

class UserService {
  getAll() {
    return request({
      url: "/api/user",
      method: "GET",
      headers: authHeader(),
    });
  }
}

export default new UserService();
