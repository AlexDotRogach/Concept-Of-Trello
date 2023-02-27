import css from './BoardList.module.css';
import { Link } from 'react-router-dom';
import { GoTrashcan } from 'react-icons/go';
const BoardList = ({ deleteBoard, boards }) => {
  return (
    <ul className={css.listBoards}>
      {boards.map(({ id, name }) => {
        return (
          <li key={id} className={css.itemBoard} data-id={id}>
            <Link to={id}>{name}</Link>
            <GoTrashcan
              fill="blue"
              size={14}
              onClick={deleteBoard}
            ></GoTrashcan>
          </li>
        );
      })}
    </ul>
  );
};

export default BoardList;
