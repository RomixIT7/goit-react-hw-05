import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const isLinkActive = ({ isActive }) =>
  clsx(css.link, { [css.active]: isActive });

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink className={isLinkActive} to="/">
          Home
        </NavLink>
        <NavLink className={isLinkActive} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
