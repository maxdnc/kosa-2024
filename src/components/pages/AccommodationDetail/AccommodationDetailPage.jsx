import { Navigate, useParams } from 'react-router-dom';
import accommodationsData from '../../../api/accommodations.json';
import SliderPictures from '../../reusable-UI/SliderPictures';
import Accordion from '../../reusable-UI/Accordion';
import styles from '../../../styles/pages/AccommodationDetail/AccommodationDetailPage.module.scss';
import LandlordAccommodation from '../../reusable-UI/LandlordAccommodation';
import Tag from '../../reusable-UI/Tag';
import StarRating from '../../reusable-UI/StarRating';

const AccommodationDetailPage = () => {
  const { id } = useParams();
  const accommodationData = accommodationsData.find(
    (accommodation) => accommodation.id === id
  );

  if (!accommodationData) {
    return <Navigate to="/error" />;
  }
  const {
    title,
    pictures,
    description,
    equipments,
    location,
    host,
    tags,
    rating,
  } = accommodationData;

  return (
    <>
      <SliderPictures images={pictures} />
      <div className={styles.wrapper}>
        <div className={styles.wrapperContentInfo}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.location}>{location}</p>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <div className={styles.wrapperStarLandlord}>
          <StarRating rating={rating} totalStars={5} />
          <LandlordAccommodation
            landlordName={host.name}
            imgLandlord={host.picture}
          />
        </div>
      </div>
      <div className={styles.wrapperAccordions}>
        <Accordion label="description" content={description} />
        <Accordion label="equipments" content={equipments} />
      </div>
    </>
  );
};
export default AccommodationDetailPage;
