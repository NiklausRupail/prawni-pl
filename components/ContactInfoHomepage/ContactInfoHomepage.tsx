import styles from './ContactInfoHomepage.module.scss';
import Image from 'next/image';
import mapImg from '../../img/mapImg.png';

const ContactInfoHomepage = () => {
  return (
    <article className={styles.contactInfo}>
      <section className={styles.contact}></section>
      <Image src={mapImg} alt='Map Image' />
    </article>
  );
};

export default ContactInfoHomepage;
