import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Navigation.module.css';

const setActive = ({ isActive }) => 'link' + (isActive ? ' active' : '');

const Navigation = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <NavLink to="/" className={setActive}>
            Home
          </NavLink>
          <NavLink to="/movies" className={setActive}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Navigation;
