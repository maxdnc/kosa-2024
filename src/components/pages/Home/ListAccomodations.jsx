import CardAccomodation from '../../reusable-UI/CardAccomodation.jsx';
import accommodationsData from '../../../api/accommodations.json';
import styles from '../../../styles/pages/Home/ListAccomodations.module.scss';

const ListAccomodations = () => {
  return (
    <section className={styles.section}>
      <ul className={styles.listAccomodations}>
        {accommodationsData.map(({ id, title, cover }) => {
          return (
            <li key={id}>
              <CardAccomodation title={title} coverImgSrc={cover} id={id} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default ListAccomodations;
