export const createTask = ({ columnParentId, taskId, taskName }) => {
  return { type: 'CREATE_TASK', payload: { columnParentId, taskId, taskName } };
};

export const deleteTask = taskIdDelete => {
  return { type: 'DELETE_TASK', payload: { taskIdDelete } };
};
