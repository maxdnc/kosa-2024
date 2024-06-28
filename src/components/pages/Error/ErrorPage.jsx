import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
};
export default ErrorPage;
