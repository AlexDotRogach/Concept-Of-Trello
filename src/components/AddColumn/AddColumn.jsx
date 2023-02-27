import css from './AddColumn.module.css';
import AddForm from '../../forms/AddForm';
import AddButton from '../../layouts/AddButton';
import { useEffect, useState } from 'react';
import { NotificationManager } from 'react-notifications';
import { nanoid } from 'nanoid';
import { createColumn } from '../../redux/actions/columnAction';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
const AddColumn = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const [isAddColumn, setIsAddColumn] = useState(false);

  useEffect(() => {
    window.addEventListener('click', closeFormByOutClick);
    return () => window.removeEventListener('click', closeFormByOutClick);
  }, []);

  const closeFormByOutClick = ({ target }) =>
    !target.closest(`.${css.controlColumn}`) && setIsAddColumn(false);

  const changeAddColumn = () => setIsAddColumn(!isAddColumn);

  const formSubmitAddColumn = (e, boardId) => {
    e.preventDefault();

    const {
      currentTarget: {
        elements: {
          name: { value: nameOfColumn },
        },
      },
    } = e;

    if (!nameOfColumn) {
      NotificationManager.info('Write the name of column');
      return;
    }

    const columnData = {
      boardId,
      columnId: nanoid(),
      columnName: nameOfColumn,
    };

    dispatch(createColumn(columnData));
    setIsAddColumn(!isAddColumn);
  };

  return (
    <div className={css.controlColumn}>
      <AddForm
        text={{ input: 'name of column', btn: 'add column' }}
        show={isAddColumn}
        submit={e => formSubmitAddColumn(e, boardId)}
        closeForm={changeAddColumn}
        styleAnim={{
          enterActive: css.addFormColumnEnter,
          enterDone: css.addFormColumnEnterDone,
        }}
      ></AddForm>
      <AddButton
        text="add column"
        isAdd={!isAddColumn}
        click={changeAddColumn}
      ></AddButton>
    </div>
  );
};

export default AddColumn;
