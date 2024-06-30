import PictureBanner from '../../../../public/images/banner/PictureAboutPage.png';
import styles from '../../../styles/pages/About/AboutPage.module.scss';
import Accordion from '../../reusable-UI/Accordion.jsx';
import Banner from '../../reusable-UI/Banner.jsx';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <Banner
        srcImage={PictureBanner}
        altImage={'Paysage marin brumeux avec vagues'}
      />

      <Accordion label={'open'} description={'lodedzeddokd  deddezdé'} />
    </div>
  );
};
export default AboutPage;
