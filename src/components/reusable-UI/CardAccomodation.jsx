import { Link } from 'react-router-dom';

const CardAccomodation = ({ title, coverImgSrc, id }) => {
  return (
    <Link
      className="card"
      style={{ backgroundColor: 'pink', margin: '1rem' }}
      to={`/detail/${id}`}
    >
      <img src={coverImgSrc} alt={title} className="card-cover" />
      <p>{title}</p>
    </Link>
  );
};

export default CardAccomodation;
