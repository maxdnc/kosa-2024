import { NavLink } from 'react-router-dom';
import styles from '../../../styles/components/Layout/Header/Header.module.scss';

const getNavLinkClassName = ({ isActive }) =>
  `${styles.link} ${isActive ? styles.active : ''}`;

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" className={getNavLinkClassName}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={getNavLinkClassName}>
          À propos
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
