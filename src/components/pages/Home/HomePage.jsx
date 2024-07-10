import ListAccomodations from './ListAccomodations.jsx';
import Banner from '../../reusable-UI/Banner.jsx';
import PictureBanner from '/images/banner/PictureHomePage.png';

const HomePage = () => {
  return (
    <>
      <Banner
        srcImage={PictureBanner}
        altImage={'Paysage marin brumeux avec vagues'}
        title={'Chez vous, partout et ailleurs'}
      />
      <ListAccomodations />
    </>
  );
};
export default HomePage;
