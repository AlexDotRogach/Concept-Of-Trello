export const createBoard = (id, name) => {
  return { type: 'CREATE_BOARD', payload: { id, name } };
};

export const deleteBoard = id => {
  return { type: 'DELETE_BOARD', payload: { id } };
};
