import css from './Board.module.css';
import { GoTrashcan } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoards } from '../../redux/selectors';
import { createBoard, deleteBoard } from '../../redux/actions/boardAction';
import { NotificationManager } from 'react-notifications';
import BoardForm from '../../forms/BoardForm';
import BoardList from '../../components/BoardList';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const createSettingForCreateButton = isEnough => {
  return isEnough
    ? { show: false, text: 'enough boards' }
    : { show: true, text: 'add board' };
};

const Board = () => {
  const [isEnoughBoards, setIsEnoughBoards] = useState(false);
  const dispatch = useDispatch();
  const boards = useSelector(selectBoards);

  const settingForCreateButton = createSettingForCreateButton(isEnoughBoards);

  boards.length >= 3
    ? !isEnoughBoards && setIsEnoughBoards(!isEnoughBoards)
    : isEnoughBoards && setIsEnoughBoards(!isEnoughBoards);

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

  const formSubmitAddColumn = e => {
    e.preventDefault();

    const {
      currentTarget: {
        elements: {
          name: { value: nameOfBoard },
        },
      },
    } = e;

    if (!nameOfBoard) {
      NotificationManager.info('Write the name of board');
      return;
    }

    dispatch(createBoard(nanoid(), nameOfBoard));
  };

  return (
    <section className={css.boardHome}>
      <BoardForm
        settingButton={settingForCreateButton}
        formSubmit={formSubmitAddColumn}
      ></BoardForm>
      <BoardList boards={boards} deleteBoard={handleDeleteBoard}></BoardList>
    </section>
  );
};

export default Board;
