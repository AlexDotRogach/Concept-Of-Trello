const sadasd = {
  columns: {},
};

export const columnReducer = (state = sadasd, action) => {
  switch (action.type) {
    case 'CREATE_COLUMN':
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.payload.id]: { columns: {}, name: action.payload.name },
        },
      };
      break;
    case 'DELETE_COLUMN':
      const newState = {};

      for (const key in state.boards) {
        if (key === action.payload.id) continue;

        newState[key] = state.boards[key];
      }

      return {
        ...state,
        boards: { ...newState },
      };
      break;
    default:
      return state;
  }
};
