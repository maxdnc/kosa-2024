import { useState } from 'react';
import styles from '../../styles/components/reusable-UI/SliderPictures.module.scss';
import ArrowLeft from '../../assets/svg/ArrowLeft';
import ArrowRight from '../../assets/svg/ArrowRight';

const SliderPictures = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div>Aucune image à afficher</div>;
  }

  const hasMultipleImages = images.length > 1;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.slide}>
        <img src={images[currentIndex]} alt={`Image de la location`} />
        {hasMultipleImages && (
          <div className={styles.leftArrow} onClick={goToPrevious}>
            <ArrowLeft />
          </div>
        )}
        {hasMultipleImages && (
          <div className={styles.rightArrow} onClick={goToNext}>
            <ArrowRight />
          </div>
        )}
        {hasMultipleImages && (
          <div className={styles.imageCounter}>
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default SliderPictures;
