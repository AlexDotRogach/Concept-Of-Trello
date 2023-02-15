import css from './BoardForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { createBoard } from '../../redux/actions/boardAction';
import { NotificationManager } from 'react-notifications';

const BoardForm = ({ settingButton }) => {
  const dispatch = useDispatch();
  const formSubmit = e => {
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
    <form className={css.form} onSubmit={formSubmit}>
      <div className={css.inputWrapper}>
        <label className={css.nameLabel} htmlFor="login">
          Name of board
        </label>
        <input
          className={css.nameInput}
          type="text"
          name="name"
          id="name"
          placeholder="write name of board"
        />
      </div>

      <button className={css.submitBtn} disabled={!settingButton.show}>
        {settingButton.text}
      </button>
    </form>
  );
};

export default BoardForm;
