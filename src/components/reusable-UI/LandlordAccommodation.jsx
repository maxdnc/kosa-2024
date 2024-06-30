import styles from '../../styles/components/reusable-UI/LandlordAccommodation.module.scss';
const LandlordAccommodation = ({ landlordName, imgLandlord }) => {
  return (
    <div className={styles.landlord}>
      <div className={styles.name}>
        {landlordName.split(' ').map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </div>
      <img className={styles.picture} src={imgLandlord} alt={landlordName} />
    </div>
  );
};
export default LandlordAccommodation;
