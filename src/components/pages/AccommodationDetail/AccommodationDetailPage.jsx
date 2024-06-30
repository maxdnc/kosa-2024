import { Navigate, useParams } from 'react-router-dom';
import accommodationsData from '../../../api/accommodations.json';
import SliderPictures from '../../reusable-UI/SliderPictures';
import Accordion from '../../reusable-UI/Accordion';

const AccommodationDetailPage = () => {
  const { id } = useParams();
  const accommodationData = accommodationsData.find(
    (accommodation) => accommodation.id === id
  );

  if (!accommodationData) {
    return <Navigate to="/error" />;
  }
  const { title, pictures, description, equipments } = accommodationData;

  return (
    <div>
      <SliderPictures images={pictures} />
      <h1>{title}</h1>
      <p>{description}</p>
      <Accordion label="description" content={description} />
      <Accordion label="equipments" content={equipments} />
    </div>
  );
};
export default AccommodationDetailPage;
