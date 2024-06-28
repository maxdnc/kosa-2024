import { Link, useParams } from 'react-router-dom';
import accommodationsData from '../../../api/accommodations.json';

const DetailPage = () => {
  const { id } = useParams();
  const accommodationData = accommodationsData.find(
    (accommodation) => accommodation.id === id
  );
  const { title, cover, description } = accommodationData;

  console.log(accommodationData);
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
