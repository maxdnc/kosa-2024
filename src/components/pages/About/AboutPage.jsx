import PictureBanner from '../../../../public/images/banner/PictureAboutPage.png';
import styles from '../../../styles/pages/About/AboutPage.module.scss';
import Accordion from '../../reusable-UI/Accordion.jsx';
import Banner from '../../reusable-UI/Banner.jsx';
import ContentAccordions from '../../../api/aboutPageContent.json';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <Banner
        srcImage={PictureBanner}
        altImage={'Paysage marin brumeux avec vagues'}
      />

      <div className={styles.accordionsList}>
        {ContentAccordions.map((accordion) => (
          <Accordion
            key={accordion.id}
            label={accordion.label}
            content={accordion.description}
          />
        ))}
      </div>
    </div>
  );
};
export default AboutPage;
