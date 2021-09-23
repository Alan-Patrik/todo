import http from "./http";

const getTask = () => {
  return http.get("/tasks");
};

const getTaskId = (id: number) => {
  return http.get(`/tasks/${id}`);
};

const createTask = (data: any) => {
  return http.post(`/tasks`, data);
};

const updateTask = (id: number, data: string) => {
  return http.put(`/tasks/${id}`, data);
};

const deleteTask = (id: number) => {
  return http.delete(`/tasks/${id}`);
};

export default {
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getTaskId,
};
