import PhoneIcon from 'Icons/PhoneIcon';
import styles from './Footer.module.scss';
import MailIcon from 'Icons/MailIcon';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h5>Kontakt</h5>
        <div className={styles.contactInfoSection}>
          <PhoneIcon fillColor={'#000000'} />

          <p>+48 500 500 500</p>
        </div>
        <div className={styles.contactInfoSection}>
          <PhoneIcon fillColor={'#000000'} />

          <p>32 333 22 22</p>
        </div>
        <div className={styles.contactInfoSection} id='mail'>
          <MailIcon fillColor={'#000000'} />

          <p>adriannowak@wp.pl</p>
        </div>
      </div>
      <div>
        <h5>Godziny urzędowania</h5>
        <p className={styles.hoursInfo}>
          od poniedziałku do piątku: od 9:00 do 17:00 lub w terminie uzgodnionym
          z klientem
        </p>
      </div>
      <div>
        <h5>Menu</h5>
        <ul>
          <li>Strona Główna</li>
          <li>Nasz Zespół</li>
          <li>Usługi</li>
          <li>Opinie</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
