import styles from '../../styles/components/reusable-UI/Banner.module.scss';

const Banner = ({ srcImage, title, altImage }) => {
  return (
    <div className={`${styles.banner} ${title ? styles.opacityVariable : ''}`}>
      {title && <span className={styles.title}>{title}</span>}
      <img className={styles.image} src={srcImage} alt={altImage}></img>
    </div>
  );
};
export default Banner;
