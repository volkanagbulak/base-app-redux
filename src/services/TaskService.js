import authHeader from "./auth-header";
import request from "./request";

class TaskService {
  getAll() {
    return request({
      url: "/api/task",
      method: "GET",
      headers: authHeader(),
    });
  }
  createTask(task) {
    return request({
      url: "/api/task",
      method: "POST",
      data: { ownerId: task.ownerId, title: task.title, description: task.description },
      headers: authHeader(),
    });
  }
  gettaskDetailByID(id) {
    return request({
      url: `/api/task/${id}`,
      method: "GET",
      headers: authHeader(),
    });
  }
  updateTaskDetailByID(id, task) {
    debugger;
    return request({
      url: `/api/task/${id}`,
      method: "PUT",
      data: { ownerId: task.ownerId, title: task.title, description: task.description },
      headers: authHeader(),
    });
  }
  deleteTaskDetailByID(id) {
    debugger;
    return request({
      url: `/api/task/${id}`,
      method: "DELETE",
      headers: authHeader(),
    });
  }
}

export default new TaskService();
