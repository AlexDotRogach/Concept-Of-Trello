import css from './SharedLayout.module.css';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
const SharedLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default SharedLayout;
