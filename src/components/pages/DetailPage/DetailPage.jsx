import { Link, Navigate, useParams } from 'react-router-dom';
import accommodationsData from '../../../api/accommodations.json';

const DetailPage = () => {
  const { id } = useParams();
  const accommodationData = accommodationsData.find(
    (accommodation) => accommodation.id === id
  );

  if (!accommodationData) {
    return <Navigate to="/error" />;
  }
  const { title, cover, description } = accommodationData;

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <h1>Detail Page for ID: {id}</h1>
      <h2>{title}</h2>
      <img src={cover} alt={title} />
      <p>{description}</p>
    </div>
  );
};
export default DetailPage;
