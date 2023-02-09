const initialState = {
  boards: {},
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOARD':
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.payload.id]: { columns: {}, name: action.payload.name },
        },
      };
      break;
    default:
      return state;
  }
};
