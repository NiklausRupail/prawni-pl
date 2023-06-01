import Image from 'next/image';
import userDefault from '../../img/userDefault.png';
import reviewStars from '../../img/reviewStars.png';
import styles from './Review.module.scss';

const Review = () => {
  return (
    <section className={styles.review}>
      <div className={styles.userInfo}>
        <Image className={styles.avatar} src={userDefault} alt='User Avatar' />
        <div>
          <h4>Martin Chuarez</h4>
          <div className={styles.reviewStats}>
            <Image src={reviewStars} alt='' />
            <h4>4.5</h4>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. In
        mattis lorem sed odio vestibulum,<br></br> vel interdum erat fringilla.
        Cras sit amet malesuada <br></br>massa.
      </p>
    </section>
  );
};
export default Review;
