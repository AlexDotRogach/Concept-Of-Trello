import css from './Board.module.css';
import { GoTrashcan } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoards } from '../../redux/selectors';
import { deleteBoard } from '../../redux/actions/boardAction';
import { Link } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import BoardForm from '../../forms/BoardForm';

const Board = () => {
  const dispatch = useDispatch();
  const boards = useSelector(selectBoards);
  const settingForCreateButton = {
    show: true,
    text: 'create board',
  };

  if (boards.length >= 3) {
    settingForCreateButton.show = !settingForCreateButton.show;
    settingForCreateButton.text = 'enough boards';
  }

  const handleDeleteBoard = ({ currentTarget: { parentElement } }) => {
    const {
      dataset: { id },
    } = parentElement;

    if (!id) {
      NotificationManager.error('Troubles with delete');
      return;
    }

    const isDelete = window.confirm('Do you want to delete this board?');

    isDelete && dispatch(deleteBoard(id));
  };

  return (
    <section className={css.boardHome}>
      <BoardForm settingButton={settingForCreateButton}></BoardForm>
      <ul className={css.listBoards}>
        {boards.map(({ id, name }) => {
          return (
            <li key={id} className={css.itemBoard} data-id={id}>
              <Link to={id}>{name}</Link>
              <GoTrashcan
                fill="blue"
                size={14}
                onClick={handleDeleteBoard}
              ></GoTrashcan>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Board;
