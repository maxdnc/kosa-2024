import styles from '../../styles/components/reusable-UI/Tag.module.scss';
const Tag = ({ tag }) => {
  return <span className={styles.tag}>{tag}</span>;
};
export default Tag;
