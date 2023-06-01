import Divider from 'components/Divider/Divider';
import Image from 'next/image';
import styles from './page.module.scss';

import lawyer1 from '../../img/lawyer1.png';
import lawyer2 from '../../img/lawyer2.png';
import lawyer3 from '../../img/lawyer3.png';

const teamPage = () => {
  return (
    <section className={styles.team}>
      <h2>NASZ ZESPÓŁ</h2>
      <div className={styles.lawyer}>
        <Image src={lawyer1} alt={'Adrian Nowak'} />
        <div>
          <h2>
            <span>Adwokat</span> - Adrian Nowak
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vestibulum varius nisi, ac mollis lectus lacinia eget. Suspendisse
            potenti. Fusce convallis neque nec semper elementum. Fusce et
            sodales urna. Nunc vestibulum leo vitae est ultricies consequat. Ut
            molestie at magna quis cursus. Donec ut tellus nec mauris porttitor
            placerat eget a diam. Proin molestie aliquet porttitor. Suspendisse
            scelerisque tincidunt vehicula. Nam vitae magna ac lacus scelerisque
            feugiat nec sed quam. Integer blandit lacus imperdiet, ullamcorper
            neque sed, euismod neque. Nam congue elementum nisl, eget luctus ex
            sagittis et. Integer tempus cursus enim, non viverra elit luctus a.
          </p>
          <Divider />
        </div>
      </div>
      <div className={styles.lawyerOther}>
        <Image src={lawyer2} alt={'Adrian Nowak'} />
        <div>
          <h2>
            <span>Adwokat</span> - Adrian Nowak
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vestibulum varius nisi, ac mollis lectus lacinia eget. Suspendisse
            potenti. Fusce convallis neque nec semper elementum. Fusce et
            sodales urna. Nunc vestibulum leo vitae est ultricies consequat. Ut
            molestie at magna quis cursus. Donec ut tellus nec mauris porttitor
            placerat eget a diam. Proin molestie aliquet porttitor. Suspendisse
            scelerisque tincidunt vehicula. Nam vitae magna ac lacus scelerisque
            feugiat nec sed quam. Integer blandit lacus imperdiet, ullamcorper
            neque sed, euismod neque. Nam congue elementum nisl, eget luctus ex
            sagittis et. Integer tempus cursus enim, non viverra elit luctus a.
          </p>
          <Divider />
        </div>
      </div>
      <div className={styles.lawyer}>
        <Image src={lawyer3} alt={'Adrian Nowak'} />
        <div>
          <h2>
            <span>Adwokat</span> - Adrian Nowak
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vestibulum varius nisi, ac mollis lectus lacinia eget. Suspendisse
            potenti. Fusce convallis neque nec semper elementum. Fusce et
            sodales urna. Nunc vestibulum leo vitae est ultricies consequat. Ut
            molestie at magna quis cursus. Donec ut tellus nec mauris porttitor
            placerat eget a diam. Proin molestie aliquet porttitor. Suspendisse
            scelerisque tincidunt vehicula. Nam vitae magna ac lacus scelerisque
            feugiat nec sed quam. Integer blandit lacus imperdiet, ullamcorper
            neque sed, euismod neque. Nam congue elementum nisl, eget luctus ex
            sagittis et. Integer tempus cursus enim, non viverra elit luctus a.
          </p>
          <Divider />
        </div>
      </div>
      <div className={styles.lastDivider}>
        <Divider />
      </div>
    </section>
  );
};

export default teamPage;
