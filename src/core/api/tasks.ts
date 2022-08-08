import axios from 'axios';

import { Task } from '@core/types/task';

axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const api = {
  tasks: {
    create: (task: Task) => axios.post('api/v1/tasks', task).then((response) => response),
    list: () => axios.get('api/v1/tasks').then((response) => response),
    item: (id: string) => axios.get(`api/v1/tasks/${id}`).then((response) => response),
    update: (task: Task) =>
      axios.patch(`api/v1/tasks/${task._id}`, task).then((response) => response),
    delete: (id: string) => axios.delete(`api/v1/tasks/${id}`).then((response) => response),
  },
};
