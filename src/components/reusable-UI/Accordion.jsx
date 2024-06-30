import { useState } from 'react';
import styles from '../../styles/components/reusable-UI/Accordion.module.scss';
import ArrowUpIcon from '../../assets/svg/ArrowUpIcon';

const Accordion = ({ label, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={toggleAccordion}>
        <span className={styles.label}>{label}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}>
          <ArrowUpIcon />
        </span>
      </div>
      {isOpen && (
        <div className={styles.content}>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
