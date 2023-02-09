export const createBoard = (id, name) => {
  return { type: 'CREATE_BOARD', payload: { id, name } };
};
