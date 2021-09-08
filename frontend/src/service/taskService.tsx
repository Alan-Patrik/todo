import http from "./http";

const getTask = () => {
  return http.get("/task");
};

const getTaskId = (id: number) => {
  return http.get(`/task/${id}`);
};

const createTask = (data: any) => {
  return http.post(`/task`, data);
};

const updateTask = (id: number, data: string) => {
  return http.put(`/task/${id}`, data);
};

const deleteTask = (id: number) => {
  return http.delete(`/task/${id}`);
};

export default {
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getTaskId,
};
