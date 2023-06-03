import Divider from 'components/Divider/Divider';
import styles from '../page.module.scss';

const CitizenPage = () => {
  return (
    <>
      <h2 className={styles.phoneHeader}>Prawo Cywilne</h2>
      <article className={styles.service}>
        <div className={styles.textBox}>
          <h2>Prawo Cywilne</h2>
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
            width='296'
            height='280'
            viewBox='0 0 296 280'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.963684 279.839V250.399H133.296V85.9044C126.925 83.6964 121.411 80.2617 116.755 75.6005C112.099 70.9392 108.668 65.4192 106.462 59.0406H59.7782L103.889 162.08C103.889 174.346 98.8653 184.773 88.8179 193.359C78.7704 201.946 66.6399 206.239 52.4264 206.239C38.2129 206.239 26.0824 201.946 16.0349 193.359C5.98743 184.773 0.963684 174.346 0.963684 162.08L45.0746 59.0406H15.6673V29.6009H106.462C109.403 21.0143 114.672 13.9586 122.269 8.43372C129.865 2.90887 138.443 0.151346 148 0.161159C157.557 0.161159 166.134 2.92359 173.731 8.44844C181.328 13.9733 186.597 21.0241 189.538 29.6009H280.333V59.0406H250.925L295.036 162.08C295.036 174.346 290.013 184.773 279.965 193.359C269.918 201.946 257.787 206.239 243.574 206.239C229.36 206.239 217.23 201.946 207.182 193.359C197.135 184.773 192.111 174.346 192.111 162.08L236.222 59.0406H189.538C187.332 65.4192 183.901 70.9392 179.245 75.6005C174.589 80.2617 169.075 83.6964 162.704 85.9044V250.399H295.036V279.839H0.963684ZM216.004 162.08H271.143L243.574 98.0482L216.004 162.08ZM24.8571 162.08H79.9957L52.4264 98.0482L24.8571 162.08ZM148 59.0406C152.166 59.0406 155.661 57.6275 158.484 54.8013C161.307 51.9751 162.713 48.4816 162.704 44.3207C162.704 40.1501 161.292 36.6517 158.469 33.8255C155.646 30.9993 152.156 29.5911 148 29.6009C143.834 29.6009 140.339 31.014 137.516 33.8402C134.693 36.6664 133.287 40.1599 133.296 44.3207C133.296 48.4914 134.708 51.9898 137.531 54.816C140.354 57.6422 143.844 59.0504 148 59.0406Z'
              fill='white'
            />
          </svg>

          <svg
            className={styles.phoneSvg}
            width='130'
            height='122'
            viewBox='0 0 130 122'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.995972 121.871V109.056H58.5996V37.4527C55.8261 36.4916 53.4259 34.9965 51.3992 32.9674C49.3724 30.9384 47.8789 28.5356 46.9189 25.759H26.5976L45.7988 70.6113C45.7988 75.9509 43.612 80.4895 39.2384 84.2272C34.8648 87.9649 29.5844 89.8337 23.3974 89.8337C17.2103 89.8337 11.93 87.9649 7.55639 84.2272C3.18278 80.4895 0.995972 75.9509 0.995972 70.6113L20.1972 25.759H7.39638V12.9441H46.9189C48.1989 9.20641 50.4924 6.1351 53.7993 3.73016C57.1062 1.32522 60.8397 0.12489 65 0.129162C69.1603 0.129162 72.8938 1.33163 76.2007 3.73657C79.5076 6.1415 81.8011 9.21068 83.0811 12.9441H122.604V25.759H109.803L129.004 70.6113C129.004 75.9509 126.817 80.4895 122.444 84.2272C118.07 87.9649 112.79 89.8337 106.603 89.8337C100.416 89.8337 95.1352 87.9649 90.7616 84.2272C86.388 80.4895 84.2012 75.9509 84.2012 70.6113L103.402 25.759H83.0811C82.1211 28.5356 80.6277 30.9384 78.6009 32.9674C76.5741 34.9965 74.1739 36.4916 71.4004 37.4527V109.056H129.004V121.871H0.995972ZM94.6019 70.6113H118.603L106.603 42.7388L94.6019 70.6113ZM11.3966 70.6113H35.3981L23.3974 42.7388L11.3966 70.6113ZM65 25.759C66.8135 25.759 68.3346 25.1439 69.5635 23.9137C70.7924 22.6835 71.4047 21.1627 71.4004 19.3516C71.4004 17.5361 70.786 16.0133 69.5571 14.783C68.3282 13.5528 66.8092 12.9398 65 12.9441C63.1866 12.9441 61.6654 13.5592 60.4365 14.7895C59.2076 16.0197 58.5953 17.5404 58.5996 19.3516C58.5996 21.167 59.214 22.6899 60.4429 23.9201C61.6718 25.1503 63.1908 25.7633 65 25.759Z'
              fill='white'
            />
          </svg>
        </div>
      </article>
      <Divider />
    </>
  );
};
export default CitizenPage;