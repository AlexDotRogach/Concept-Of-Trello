import css from './Board.module.css';
import { useSelector } from 'react-redux';
import { selectBoards } from '../../redux/selectors';
import BoardForm from '../../forms/BoardForm';
import { Link } from 'react-router-dom';
const Board = () => {
  const boards = useSelector(selectBoards);
  const boardsInfo = [];

  for (const key in boards) {
    boardsInfo.push([key, boards[key].name]);
  }

  return (
    <>
      <BoardForm></BoardForm>
      <ul className={css.listBoards}>
        {boardsInfo.map(([id, name], index) => {
          return (
            <li key={index} className={css.board}>
              <Link to={id}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Board;
