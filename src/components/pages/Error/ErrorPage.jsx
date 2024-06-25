import { Link, useLocation } from 'react-router-dom';

const ErrorPage = () => {
  const location = useLocation();
  return (
    <div>
      <h1>Error 404: Page Not Found</h1>
      <p>The page {location.pathname} does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};
export default ErrorPage;
