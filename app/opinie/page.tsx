import Review from 'components/Review/Review';
import styles from './page.module.scss';
import Divider from 'components/Divider/Divider';

const reviewsPage = () => {
  return (
    <>
      <section className={styles.reviews}>
        <h2>Opinie Klientów</h2>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </section>
      <Divider />
    </>
  );
};

export default reviewsPage;
