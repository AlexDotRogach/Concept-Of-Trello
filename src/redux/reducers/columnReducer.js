import { NotificationManager } from 'react-notifications';
import { columnMessages, taskMessages } from '../constants';

const {
  addSameNameColumn,
  updateSameNameColumn,
  updateTheNameIsAlreadyExistColumn,
} = columnMessages;
const { addSameNameTask } = taskMessages;
const initialState = {
  columns: [],
};

export const columnReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_COLUMN':
      const isColumn = state.columns.some(
        column => column.name === action.payload.columnName
      );

      if (isColumn) {
        NotificationManager.info(addSameNameColumn);
        return state;
      }

      const { boardId, columnId, columnName } = action.payload;

      return {
        ...state,
        columns: [
          ...state.columns,
          { idBoard: boardId, id: columnId, tasks: [], name: columnName },
        ],
      };
      break;
    case 'DELETE_COLUMN':
      const { columnIdDelete } = action.payload;

      const columnDeleteIndex = state.columns.findIndex(
        column => column.id === columnIdDelete
      );

      const newColumnsAfterDeleteColumn = [...state.columns];

      newColumnsAfterDeleteColumn.splice(columnDeleteIndex, 1);

      return {
        ...state,
        columns: [...newColumnsAfterDeleteColumn],
      };
      break;

    case 'RENAME_COLUMN':
      const { columnIdRename, newColumnName } = action.payload;

      const isTheSameName = state.columns.some(
        column => column.name === newColumnName && column.id === columnIdRename
      );

      if (isTheSameName) {
        NotificationManager.info(updateSameNameColumn);
        return state;
      }

      const isNameAlreadyExist = state.columns.some(
        column => column.name === newColumnName
      );

      if (isNameAlreadyExist) {
        NotificationManager.info(updateTheNameIsAlreadyExistColumn);
        return state;
      }

      const updateColumns = [...state.columns];

      const updateColumnIndex = updateColumns.findIndex(
        column => column.id === columnIdRename
      );

      updateColumns[updateColumnIndex].name = newColumnName;

      return {
        ...state,
        columns: [...updateColumns],
      };
      break;
    case 'CREATE_TASK':
      const { columnParentId, taskId, taskName } = action.payload;

      const isTask = state.columns
        .filter(column => column.id === columnParentId)
        .flatMap(column => column.tasks)
        .some(task => task.name === taskName);

      if (isTask) {
        NotificationManager.info(addSameNameTask);
        return state;
      }

      const newColumnsTaskAdd = [...state.columns];

      const currentColumnCreate =
        newColumnsTaskAdd[
          newColumnsTaskAdd.findIndex(column => column.id === columnParentId)
        ];

      currentColumnCreate.tasks.push({ id: taskId, name: taskName });

      return { ...state, columns: [...newColumnsTaskAdd] };
      break;
    case 'DELETE_TASK':
      const { taskIdDelete } = action.payload;

      const newColumnsAfterDeleteTask = [...state.columns];

      const currentColumnDelete = newColumnsAfterDeleteTask.find(column => {
        return column.tasks.some(task => task.id === taskIdDelete);
      });

      const indexTaskDelete = currentColumnDelete.tasks.findIndex(
        task => task.id === taskIdDelete
      );

      currentColumnDelete.tasks.splice(indexTaskDelete, 1);

      return {
        ...state,
        columns: [...newColumnsAfterDeleteTask],
      };
      break;
    default:
      return state;
  }
};
