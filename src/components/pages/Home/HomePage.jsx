import ListAccomodations from './ListAccomodations.jsx';
import Banner from '../../reusable-UI/Banner.jsx';
import PictureBanner from '../../../../public/images/banner/PictureHomePage.png';
import styles from '../../../styles/pages/Home/HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Banner
        srcImage={PictureBanner}
        altImage={'Paysage marin brumeux avec vagues'}
        title={'Chez vous, partout et ailleurs'}
      />
      <ListAccomodations />
    </div>
  );
};
export default HomePage;
