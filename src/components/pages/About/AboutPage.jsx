import Banner from '../../reusable-UI/Banner.jsx';
import PictureBanner from '../../../../public/images/banner/PictureAboutPage.png';
import styles from '../../../styles/pages/About/AboutPage.module.scss';
const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <Banner
        srcImage={PictureBanner}
        altImage={'Paysage marin brumeux avec vagues'}
      />
    </div>
  );
};
export default AboutPage;
