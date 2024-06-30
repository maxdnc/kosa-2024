import { useState, useRef, useEffect } from 'react';
import styles from '../../styles/components/reusable-UI/Accordion.module.scss';
import ArrowUpIcon from '../../assets/svg/ArrowUpIcon';

const Accordion = ({ label, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.maxHeight = '0px';
      }
    }
  }, [isOpen]);

  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={toggleAccordion}>
        <span className={styles.label}>{label}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}>
          <ArrowUpIcon />
        </span>
      </div>
      <div className={`${styles.contentWrapper} ${isOpen ? styles.open : ''}`}>
        <div className={styles.content} ref={contentRef}>
          <div className={styles.inner}>
            <p className={`${styles.description} ${isOpen ? styles.open : ''}`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
