export const createColumn = ({ boardId, columnId, columnName }) => {
  return { type: 'CREATE_COLUMN', payload: { boardId, columnId, columnName } };
};

export const deleteColumn = columnIdDelete => {
  return { type: 'DELETE_COLUMN', payload: { columnIdDelete } };
};

export const renameColumn = ({ columnIdRename, newColumnName }) => {
  return { type: 'RENAME_COLUMN', payload: { columnIdRename, newColumnName } };
};
