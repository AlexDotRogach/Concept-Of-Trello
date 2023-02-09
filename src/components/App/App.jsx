import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Board from '../../pages/Board';
import BoardDetail from '../BoardDetail';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/board" element={<Board></Board>}></Route>
      <Route
        path="/board/:boardId"
        element={<BoardDetail></BoardDetail>}
      ></Route>
    </Routes>
  );
};

export default App;
