import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Board from '../../pages/Board';
import BoardDetail from '../BoardDetail';
import SharedLayout from '../../layouts/SharedLayout';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout></SharedLayout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/board" element={<Board></Board>}></Route>
        <Route
          path="/board/:boardId"
          element={<BoardDetail></BoardDetail>}
        ></Route>
      </Route>
    </Routes>
  );
};

export default App;
