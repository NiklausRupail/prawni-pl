import styles from './page.module.scss';
import heroImg from '../img/heroImg.png';
import aboutImg from '../img/aboutImg.png';
import Image from 'next/image';

const Homepage = () => {
  return (
    <>
      <article className={styles.mainInfo}>
        <section>
          <h1>Działamy dla Państwa</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vestibulum varius nisi, ac mollis lectus lacinia eget. Suspendisse
            potenti. Fusce convallis neque nec semper.
          </h2>
          <button>Skontaktuj się</button>
        </section>
        <Image src={heroImg} alt='Main picture, man in suit' />
      </article>
      <div className={styles.divider}></div>
      <article className={styles.aboutInfo}>
        <h2>O Kancelarii</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          vestibulum varius nisi, ac mollis lectus lacinia eget. Suspendisse
          potenti. Fusce convallis neque nec semper elementum. Fusce et sodales
          urna. Nunc vestibulum leo vitae est ultricies consequat. Ut molestie
          at magna quis cursus. Donec ut tellus nec mauris porttitor placerat
          eget a diam. Proin molestie aliquet porttitor. Suspendisse scelerisque
          tincidunt vehicula. Nam vitae magna ac lacus scelerisque feugiat nec
          sed quam. Integer blandit lacus imperdiet, ullamcorper neque sed,
          euismod neque. Nam congue elementum nisl, eget luctus ex sagittis et.
          Integer tempus cursus enim, non viverra elit luctus a.
        </p>
        <div>
          <section className={styles.values}>
            <div>
              <h4>Zaangażowanie i współpraca</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vestibulum varius nisi, ac mollis lectus lacinia eget.
                Suspendisse potenti. Fusce convallis neque nec semper elementum.
              </p>
            </div>
            <div>
              <h4>Różnorodność rozwiązań</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vestibulum varius nisi, ac mollis lectus lacinia eget.
                Suspendisse potenti. Fusce convallis neque nec semper elementum.
              </p>
            </div>
            <div>
              <h4>Doświadczony zespół</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vestibulum varius nisi, ac mollis lectus lacinia eget.
                Suspendisse potenti. Fusce convallis neque nec semper elementum.
              </p>
            </div>
          </section>
          <Image src={aboutImg} alt='About info image' />
        </div>
      </article>
      <article></article>
      <article></article>
    </>
  );
};

export default Homepage;
