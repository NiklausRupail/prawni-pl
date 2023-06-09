import PhoneIcon from 'Icons/PhoneIcon';
import styles from './Contact.module.scss';
import MailIcon from 'Icons/MailIcon';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.phoneNums}>
        <a href='tel:500-500-500'>
          <PhoneIcon fillColor={undefined} />
          <p>+48 500 500 500</p>
        </a>
        <a href='tel:323-332-222' className={styles.mobileNum}>
          <PhoneIcon fillColor={undefined} />
          <p>32 333 22 22</p>
        </a>
      </div>
      <a href='mailto:adriannowak@wp.pl' className={styles.mail}>
        <MailIcon fillColor={undefined} />
        <p>adriannowak@wp.pl</p>
      </a>
    </div>
  );
};

export default Contact;
