import request from "./request";

class AuthService {
  login(email, password) {
    return request({
      url: "/api/auth/login",
      method: "POST",
      data: { email, password },
    });
  }

  register(firstName, lastName, email, password) {
    return request({
      url: "/api/auth/register",
      method: "POST",
      data: { firstName, lastName, email, password },
    });
  }
}

export default new AuthService();
