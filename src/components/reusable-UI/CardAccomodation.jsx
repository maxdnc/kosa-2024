import { Link } from 'react-router-dom';
import styles from '../../styles/components/reusable-UI/CardAccomodation.module.scss';

const CardAccomodation = ({ title, coverImgSrc, id }) => {
  return (
    <Link className={styles.cardAccomodation} to={`/detail/${id}`}>
      <img src={coverImgSrc} alt={title} className={styles.img} />
      <span className={styles.title}>{title}</span>
    </Link>
  );
};

export default CardAccomodation;
