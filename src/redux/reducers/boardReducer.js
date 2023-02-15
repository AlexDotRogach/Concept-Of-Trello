import { NotificationManager } from 'react-notifications';

const initialState = {
  boards: [],
};

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOARD':
      const isBoard = state.boards.find(
        board => board.name === action.payload.name
      );

      if (isBoard) return state;

      return {
        ...state,
        boards: [
          ...state.boards,
          { id: action.payload.id, columns: {}, name: action.payload.name },
        ],
      };
      break;
    case 'DELETE_BOARD':
      return {
        ...state,
        boards: state.boards.filter(({ id }) => action.payload.id !== id),
      };
      break;
    default:
      return state;
  }
};
