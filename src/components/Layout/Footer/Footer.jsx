import KasaLogo from '../../../assets/svg/KasaLogo.jsx';
import styles from '../../../styles/components/Layout/Footer/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.wrapperLogo}>
          <KasaLogo color={'white'} />
        </div>
        <div className={styles.wrapperText}>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
