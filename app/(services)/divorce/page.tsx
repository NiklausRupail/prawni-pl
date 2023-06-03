import styles from '../page.module.scss';
import Divider from 'components/Divider/Divider';

const DivorcePage = () => {
  return (
    <>
      <h2 className={styles.phoneHeader}>Prawo Rozwodowe</h2>
      <article className={styles.service}>
        <div className={styles.textBox}>
          <h2>Prawo Rozwodowe</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vestibulum varius nisi, ac mollis lectus lacinia eget. Suspendisse
            potenti. Fusce convallis neque nec semper elementum. Fusce et
            sodales urna. Nunc vestibulum leo vitae est ultricies consequat. Ut
            molestie at magna quis cursus. Donec ut tellus nec mauris porttitor
            placerat eget a diam. Proin molestie aliquet porttitor. Suspendisse
            scelerisque tincidunt vehicula. Nam vitae magna ac lacus scelerisque
            feugiat nec sed quam:
          </p>
          <p>
            Aliquam nec neque fringilla, tristique eros at, venenatis magna.
            Cras porta lorem nisi, eget facilisis elit blandit non. Vestibulum
            blandit nibh porttitor leo maximus congue. Praesent semper
            condimentum ultricies.
          </p>
        </div>
        <div className={styles.iconBox}>
          <svg
            className={styles.desktopSvg}
            width='272'
            height='272'
            viewBox='0 0 272 272'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M181.333 0H30.2222C22.2068 0 14.5196 3.18412 8.85188 8.85188C3.18412 14.5196 0 22.2068 0 30.2222V241.778C0 249.793 3.18412 257.48 8.85188 263.148C14.5196 268.816 22.2068 272 30.2222 272H241.778C249.793 272 257.48 268.816 263.148 263.148C268.816 257.48 272 249.793 272 241.778V90.6667L181.333 0ZM241.778 241.778H30.2222V30.2222H166.222V105.778H241.778M211.556 166.222H60.4444V136H211.556M166.222 211.556H60.4444V181.333H166.222'
              fill='white'
            />
          </svg>

          <svg
            className={styles.phoneSvg}
            width='122'
            height='122'
            viewBox='0 0 122 122'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M81.2903 0.12915H13.6559C10.0684 0.12915 6.62775 1.5543 4.09096 4.09108C1.55418 6.62786 0.129032 10.0685 0.129032 13.656V108.344C0.129032 111.932 1.55418 115.372 4.09096 117.909C6.62775 120.446 10.0684 121.871 13.6559 121.871H108.344C111.932 121.871 115.372 120.446 117.909 117.909C120.446 115.372 121.871 111.932 121.871 108.344V40.7098L81.2903 0.12915ZM108.344 108.344H13.6559V13.656H74.5269V47.4732H108.344M94.8172 74.527H27.1828V61.0001H94.8172M74.5269 94.8173H27.1828V81.2904H74.5269'
              fill='white'
            />
          </svg>
        </div>
      </article>
      <Divider />
    </>
  );
};
export default DivorcePage;
