import styles from './ContactInfoHomepage.module.scss';
import Image from 'next/image';
import mapImg from '../../img/mapImg.png';
import ContactPlaceIcon from 'Icons/ContactPlaceIcon';
import ContactPhoneIcon from 'Icons/ContactPhoneIcon';
import ContactMailIcon from 'Icons/ContactMailIcon';

const ContactInfoHomepage = () => {
  return (
    <article className={styles.contactInfo}>
      <section className={styles.contact}>
        <h2>Kontakt</h2>
        <div>
          <ContactPlaceIcon />
          <h5>
            Lorem St 30/4 <br></br>40-400 Lorem
          </h5>
        </div>
        <div>
          <ContactPhoneIcon />
          <h5>
            +48 500 500 500 <br></br>32 333 22 22
          </h5>
        </div>
        <div>
          <ContactMailIcon />
          <h5>adriannowak@wp.pl</h5>
        </div>
      </section>
      <Image src={mapImg} alt='Map Image' />
    </article>
  );
};

export default ContactInfoHomepage;
