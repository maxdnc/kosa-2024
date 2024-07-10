import StarIcon from '../../assets/svg/StarIcon.jsx';
import styles from '../../styles/components/reusable-UI/StarRating.module.scss';

const StarRating = ({ rating, totalStars }) => {
  const ratingNumber = parseInt(rating) || 0;

  return (
    <div className={styles.starRating}>
      {[...Array(totalStars)].map((_, index) => (
        <StarIcon key={index} isRated={index < ratingNumber} />
      ))}
    </div>
  );
};

export default StarRating;
