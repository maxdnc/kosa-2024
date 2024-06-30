import { Link } from 'react-router-dom';
import styles from '../../../styles/pages/Error/Error.module.scss';

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
};
export default ErrorPage;
