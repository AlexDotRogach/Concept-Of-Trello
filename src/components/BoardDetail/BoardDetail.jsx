import css from './BoardDetail.module.css';
import { BsPlusCircleFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBoards } from '../../redux/selectors';
const App = () => {
  const { boardId } = useParams();
  const boards = useSelector(selectBoards);

  // console.log(boards[boardId]);
  const formSubmitAddColumn = e => {
    e.preventDefault();

    const {
      currentTarget: {
        elements: {
          name: { value: nameOfColumn },
        },
      },
    } = e;

    console.log(nameOfColumn);
  };

  return (
    <ul className={css.boardDetail}>
      <li>
        <form onSubmit={formSubmitAddColumn} className={css.formBoardAddColumn}>
          <input
            className={css.addInput}
            type="text"
            name="name"
            id="name"
            placeholder="name of column"
          />
          <button className={css.buttonPlus}>
            <BsPlusCircleFill size={22}></BsPlusCircleFill>
          </button>
        </form>
      </li>
      <li className={css.boardColumn}>
        <form>
          <input
            className={css.input}
            type="text"
            name="name"
            id="name"
            placeholder="name of column"
          />
        </form>
      </li>
    </ul>
  );
};

export default App;
