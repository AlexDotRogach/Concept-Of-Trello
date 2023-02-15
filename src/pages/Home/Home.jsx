import css from './Home.module.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <section className={css.home}>
      <div className={css.homeInfo}>
        <h1>Info about this project</h1>
        <span>This application has the concept of trello</span>
        <span>
          You can create board and columns and tasks in this. Then you can move
          your task
        </span>
      </div>
      <div className={css.linkInfo}>You can move -></div>
      <ul className={css.linkWrapper}>
        <li>
          <Link to="/board">Boards</Link>
        </li>
      </ul>
    </section>
  );
};

export default Home;
