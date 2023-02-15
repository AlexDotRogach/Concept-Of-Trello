import { combineReducers } from 'redux';
import { boardReducer } from './reducers/boardReducer';
import { columnReducer } from './reducers/columnReducer';

export const rootReducer = combineReducers({
  board: boardReducer,
  column: columnReducer,
});
