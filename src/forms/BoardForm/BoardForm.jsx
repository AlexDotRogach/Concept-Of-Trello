import css from './BoardForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { createBoard } from '../../redux/actions';
const BoardForm = () => {
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

    if (!nameOfBoard) return;

    dispatch(createBoard(nanoid(), nameOfBoard));
  };

  return (
    <form className={css.form} onSubmit={formSubmit}>
      <div className={css.name}>
        <label className={css.nameLabel} htmlFor="login">
          Name of board
        </label>
        <input
          className={css.nameInput}
          type="text"
          name="name"
          id="name"
          placeholder="name of board"
        />
      </div>

      <button className={css.submitBtn}>create board</button>
    </form>
  );
};

export default BoardForm;
