import css from './Home.module.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <span>Start Page</span>
      <Link to="/board">Boards</Link>
    </>
  );
};

export default Home;
