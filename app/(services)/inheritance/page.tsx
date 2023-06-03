import styles from '../page.module.scss';
import Divider from 'components/Divider/Divider';

const InheritancePage = () => {
  return (
    <>
      <h2 className={styles.phoneHeader}>Prawo Spadkowe</h2>
      <article className={styles.service}>
        <div className={styles.textBox}>
          <h2>Prawo Spadkowe</h2>
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
            width='310'
            height='272'
            viewBox='0 0 310 272'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M272.946 221.76C282.909 226.617 291.143 233.447 297.649 242.251C304.155 251.054 308.272 260.97 310 272H293.227C292.109 266.232 290.025 260.869 286.975 255.911C283.925 250.953 280.215 246.703 275.844 243.161C271.472 239.62 266.542 236.786 261.053 234.661C255.563 232.536 249.87 231.525 243.974 231.626C237.977 231.626 232.284 232.638 226.896 234.661C221.508 236.685 216.578 239.468 212.105 243.009C207.632 246.551 203.922 250.852 200.974 255.911C198.026 260.97 195.942 266.333 194.722 272H177.949C179.575 261.072 183.642 251.206 190.148 242.402C196.654 233.599 204.939 226.718 215.002 221.76C209.208 217.206 204.735 211.692 201.584 205.215C198.433 198.739 196.806 191.859 196.704 184.573C196.704 180.019 197.314 175.618 198.534 171.368C199.754 167.118 201.584 163.121 204.024 159.377C206.463 155.633 209.361 152.294 212.715 149.359C216.07 146.425 219.831 143.946 223.999 141.922C221.254 137.976 218.103 134.485 214.545 131.449C210.987 128.413 207.124 125.732 202.956 123.404C198.788 121.077 194.417 119.407 189.843 118.396C185.268 117.384 180.541 116.777 175.662 116.574C167.529 116.574 159.752 118.143 152.332 121.279C144.911 124.416 138.455 129.02 132.966 135.092C135.406 141.669 136.626 148.449 136.626 155.431C136.626 164.74 134.542 173.493 130.374 181.689C126.206 189.885 120.361 196.766 112.838 202.332C119.446 205.671 125.393 209.769 130.679 214.626C135.965 219.483 140.539 224.947 144.402 231.019C148.265 237.09 151.162 243.566 153.094 250.447C155.025 257.328 156.042 264.512 156.144 272H136.626C136.626 264.006 135.101 256.468 132.051 249.384C129.001 242.301 124.834 236.129 119.547 230.867C114.261 225.605 108.01 221.406 100.792 218.269C93.5744 215.132 86.001 213.614 78.0718 213.715C69.9393 213.715 62.366 215.233 55.3517 218.269C48.3374 221.304 42.1364 225.453 36.7486 230.715C31.3609 235.977 27.1422 242.2 24.0925 249.384C21.0428 256.569 19.518 264.107 19.518 272H0C0 264.613 1.01656 257.479 3.04968 250.599C5.0828 243.718 7.98 237.242 11.7413 231.17C15.5025 225.099 20.0262 219.635 25.3123 214.778C30.5985 209.921 36.5962 205.772 43.3055 202.332C35.7829 196.766 29.9377 189.885 25.7698 181.689C21.6019 173.493 19.518 164.74 19.518 155.431C19.518 147.437 21.0428 139.898 24.0925 132.815C27.1422 125.732 31.3101 119.559 36.5962 114.297C41.8823 109.036 48.0833 104.836 55.1992 101.699C62.3151 98.5625 69.9393 97.0447 78.0718 97.1459C86.7126 97.1459 94.8959 98.9673 102.622 102.61C110.348 106.253 117.057 111.312 122.75 117.788C125.393 115.259 128.239 112.982 131.289 110.958C134.338 108.934 137.541 107.012 140.895 105.19C133.373 99.625 127.527 92.7442 123.36 84.5479C119.192 76.3516 117.108 67.5988 117.108 58.2894C117.108 50.2955 118.633 42.757 121.682 35.6738C124.732 28.5906 128.9 22.418 134.186 17.1562C139.472 11.8944 145.673 7.69509 152.789 4.55824C159.905 1.42139 167.529 -0.0964455 175.662 0.00474322C183.692 0.00474322 191.266 1.52257 198.382 4.55824C205.498 7.5939 211.699 11.7426 216.985 17.0044C222.271 22.2663 226.49 28.4894 229.641 35.6738C232.792 42.8582 234.317 50.3967 234.215 58.2894C234.215 67.5988 232.132 76.3516 227.964 84.5479C223.796 92.7442 217.95 99.625 210.428 105.19C217.544 108.934 223.948 113.488 229.641 118.851C235.334 124.214 240.162 130.437 244.127 137.52C250.633 137.52 256.732 138.734 262.425 141.163C268.118 143.592 273.15 146.981 277.521 151.332C281.892 155.684 285.247 160.642 287.585 166.207C289.923 171.773 291.143 177.895 291.244 184.573C291.244 191.859 289.669 198.739 286.517 205.215C283.366 211.692 278.842 217.206 272.946 221.76ZM78.0718 194.287C83.4596 194.287 88.4916 193.275 93.1677 191.251C97.8439 189.228 102.012 186.445 105.671 182.903C109.331 179.362 112.127 175.264 114.058 170.609C115.99 165.954 117.006 160.895 117.108 155.431C117.108 150.068 116.091 145.059 114.058 140.404C112.025 135.749 109.229 131.601 105.671 127.958C102.113 124.315 97.9964 121.532 93.3202 119.61C88.644 117.687 83.5612 116.675 78.0718 116.574C72.684 116.574 67.6521 117.586 62.9759 119.61C58.2997 121.634 54.1318 124.416 50.4722 127.958C46.8126 131.499 44.0171 135.598 42.0856 140.252C40.1541 144.907 39.1376 149.966 39.0359 155.431C39.0359 160.794 40.0525 165.802 42.0856 170.457C44.1187 175.112 46.9142 179.261 50.4722 182.903C54.0302 186.546 58.1472 189.329 62.8234 191.251C67.4996 193.174 72.5824 194.186 78.0718 194.287ZM136.626 58.2894C136.626 63.6524 137.642 68.6613 139.675 73.316C141.708 77.9706 144.504 82.1194 148.062 85.7622C151.62 89.405 155.737 92.1877 160.413 94.1102C165.089 96.0328 170.172 97.0447 175.662 97.1459C181.049 97.1459 186.081 96.134 190.758 94.1102C195.434 92.0865 199.602 89.3038 203.261 85.7622C206.921 82.2206 209.716 78.1224 211.648 73.4677C213.579 68.8131 214.596 63.7536 214.697 58.2894C214.697 52.9264 213.681 47.9176 211.648 43.2629C209.615 38.6082 206.819 34.4595 203.261 30.8167C199.703 27.1739 195.586 24.3912 190.91 22.4686C186.234 20.5461 181.151 19.5342 175.662 19.433C170.274 19.433 165.242 20.4449 160.566 22.4686C155.889 24.4924 151.722 27.2751 148.062 30.8167C144.402 34.3583 141.607 38.4565 139.675 43.1111C137.744 47.7658 136.727 52.8252 136.626 58.2894ZM243.974 153.913C239.705 153.913 235.74 154.722 232.081 156.341C228.421 157.96 225.168 160.136 222.322 162.868C219.475 165.6 217.239 168.838 215.612 172.582C213.986 176.326 213.173 180.323 213.173 184.573C213.173 188.823 213.986 192.769 215.612 196.412C217.239 200.055 219.424 203.293 222.169 206.126C224.914 208.959 228.167 211.186 231.928 212.805C235.689 214.424 239.705 215.233 243.974 215.233C248.244 215.233 252.209 214.424 255.868 212.805C259.528 211.186 262.781 209.01 265.627 206.278C268.474 203.546 270.71 200.308 272.336 196.564C273.963 192.82 274.776 188.823 274.776 184.573C274.776 180.323 273.963 176.377 272.336 172.734C270.71 169.091 268.524 165.853 265.78 163.02C263.035 160.186 259.782 157.96 256.021 156.341C252.259 154.722 248.244 153.913 243.974 153.913Z'
              fill='white'
            />
          </svg>

          <svg
            className={styles.phoneSvg}
            width='140'
            height='122'
            viewBox='0 0 140 122'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M122.791 99.3845C127.249 101.558 130.935 104.616 133.847 108.556C136.759 112.496 138.602 116.934 139.375 121.871H131.868C131.367 119.29 130.434 116.889 129.069 114.67C127.704 112.451 126.044 110.549 124.087 108.963C122.131 107.378 119.924 106.11 117.467 105.159C115.01 104.208 112.462 103.755 109.823 103.8C107.139 103.8 104.591 104.253 102.179 105.159C99.7679 106.065 97.5612 107.31 95.5592 108.895C93.5572 110.481 91.8965 112.405 90.577 114.67C89.2576 116.934 88.3248 119.335 87.7788 121.871H80.2715C80.9994 116.98 82.8194 112.564 85.7314 108.624C88.6433 104.683 92.3515 101.604 96.8559 99.3845C94.2625 97.3465 92.2605 94.8782 90.85 91.9796C89.4396 89.081 88.7116 86.0013 88.6661 82.7404C88.6661 80.7024 88.9391 78.7323 89.4851 76.8301C90.031 74.9279 90.85 73.1389 91.942 71.4632C93.034 69.7875 94.3307 68.2929 95.8322 66.9795C97.3337 65.6661 99.0172 64.5564 100.883 63.6507C99.6541 61.8843 98.2437 60.3218 96.6512 58.9631C95.0587 57.6044 93.3297 56.4042 91.4643 55.3626C89.5988 54.3209 87.6423 53.5736 85.5949 53.1207C83.5474 52.6678 81.4317 52.3961 79.2477 52.3055C75.6078 52.3055 72.1271 53.0075 68.8056 54.4115C65.4842 55.8155 62.595 57.8762 60.138 60.5936C61.23 63.5374 61.776 66.5719 61.776 69.6969C61.776 73.8636 60.8433 77.7812 58.9778 81.4497C57.1123 85.1182 54.4961 88.1979 51.1292 90.6888C54.0866 92.1834 56.7483 94.0177 59.1143 96.1916C61.4803 98.3655 63.5277 100.811 65.2567 103.529C66.9857 106.246 68.2824 109.145 69.1469 112.224C70.0114 115.304 70.4664 118.52 70.5119 121.871H61.776C61.776 118.293 61.0935 114.919 59.7285 111.749C58.3636 108.578 56.4981 105.816 54.1321 103.461C51.7662 101.106 48.968 99.226 45.7375 97.822C42.5071 96.418 39.1174 95.7387 35.5684 95.784C31.9285 95.784 28.5388 96.4633 25.3993 97.822C22.2599 99.1807 19.4844 101.038 17.073 103.393C14.6615 105.748 12.7733 108.533 11.4083 111.749C10.0433 114.964 9.36086 118.338 9.36086 121.871H0.625C0.625 118.565 1.07999 115.372 1.98998 112.292C2.89996 109.212 4.19669 106.314 5.88016 103.597C7.56364 100.879 9.58835 98.4334 11.9543 96.2595C14.3203 94.0856 17.0047 92.2287 20.0077 90.6888C16.6407 88.1979 14.0245 85.1182 12.1591 81.4497C10.2936 77.7812 9.36086 73.8636 9.36086 69.6969C9.36086 66.119 10.0433 62.7448 11.4083 59.5745C12.7733 56.4042 14.6388 53.6415 17.0047 51.2864C19.3707 48.9314 22.1462 47.0518 25.3311 45.6478C28.516 44.2438 31.9285 43.5645 35.5684 43.6098C39.4359 43.6098 43.0986 44.425 46.5565 46.0554C50.0144 47.6859 53.0174 49.9504 55.5654 52.849C56.7483 51.7167 58.0223 50.6977 59.3873 49.7919C60.7523 48.8861 62.1855 48.0256 63.687 47.2103C60.32 44.7194 57.7038 41.6397 55.8384 37.9712C53.9729 34.3027 53.0401 30.3851 53.0401 26.2184C53.0401 22.6405 53.7226 19.2663 55.0876 16.096C56.4526 12.9257 58.3181 10.163 60.684 7.80795C63.05 5.45286 65.8254 3.57332 69.0104 2.16933C72.1953 0.765335 75.6078 0.0859833 79.2477 0.131273C82.8422 0.131273 86.2319 0.810625 89.4168 2.16933C92.6018 3.52803 95.3772 5.38493 97.7432 7.74001C100.109 10.0951 101.997 12.8804 103.408 16.096C104.818 19.3116 105.501 22.6857 105.455 26.2184C105.455 30.3851 104.523 34.3027 102.657 37.9712C100.792 41.6397 98.1754 44.7194 94.8085 47.2103C97.9934 48.8861 100.86 50.9241 103.408 53.3245C105.956 55.7249 108.117 58.5102 109.891 61.6805C112.803 61.6805 115.533 62.224 118.081 63.311C120.629 64.3979 122.882 65.9152 124.838 67.8626C126.794 69.8101 128.296 72.0293 129.342 74.5203C130.389 77.0112 130.935 79.7513 130.98 82.7404C130.98 86.0013 130.275 89.081 128.865 91.9796C127.454 94.8782 125.429 97.3465 122.791 99.3845ZM35.5684 87.0883C37.9799 87.0883 40.2321 86.6354 42.3251 85.7296C44.418 84.8238 46.2835 83.5783 47.9215 81.9931C49.5595 80.408 50.8107 78.5737 51.6752 76.4904C52.5397 74.4071 52.9946 72.1425 53.0401 69.6969C53.0401 67.2965 52.5852 65.0546 51.6752 62.9713C50.7652 60.888 49.514 59.0311 47.9215 57.4006C46.329 55.7702 44.4863 54.5247 42.3933 53.6642C40.3004 52.8037 38.0254 52.3508 35.5684 52.3055C33.157 52.3055 30.9048 52.7584 28.8118 53.6642C26.7188 54.57 24.8534 55.8155 23.2154 57.4006C21.5774 58.9858 20.3262 60.82 19.4617 62.9034C18.5972 64.9867 18.1422 67.2512 18.0967 69.6969C18.0967 72.0973 18.5517 74.3391 19.4617 76.4225C20.3717 78.5058 21.6229 80.3627 23.2154 81.9931C24.8079 83.6236 26.6506 84.8691 28.7435 85.7296C30.8365 86.5901 33.1115 87.043 35.5684 87.0883ZM61.776 26.2184C61.776 28.6188 62.231 30.8606 63.141 32.944C64.051 35.0273 65.3022 36.8842 66.8947 38.5146C68.4871 40.1451 70.3299 41.3906 72.4228 42.2511C74.5158 43.1116 76.7908 43.5645 79.2477 43.6098C81.6592 43.6098 83.9114 43.1569 86.0044 42.2511C88.0973 41.3453 89.9628 40.0998 91.6008 38.5146C93.2387 36.9295 94.49 35.0952 95.3545 33.0119C96.2189 30.9285 96.6739 28.664 96.7194 26.2184C96.7194 23.818 96.2644 21.5761 95.3545 19.4928C94.4445 17.4094 93.1932 15.5526 91.6008 13.9221C90.0083 12.2917 88.1656 11.0462 86.0726 10.1857C83.9796 9.32516 81.7047 8.87226 79.2477 8.82697C76.8363 8.82697 74.584 9.27987 72.4911 10.1857C70.3981 11.0915 68.5326 12.337 66.8947 13.9221C65.2567 15.5073 64.0055 17.3415 63.141 19.4249C62.2765 21.5082 61.8215 23.7727 61.776 26.2184ZM109.823 69.0175C107.912 69.0175 106.138 69.3798 104.5 70.1045C102.862 70.8291 101.406 71.8029 100.132 73.0257C98.8579 74.2485 97.8569 75.6978 97.1289 77.3736C96.4009 79.0493 96.0369 80.8382 96.0369 82.7404C96.0369 84.6426 96.4009 86.4089 97.1289 88.0394C97.8569 89.6698 98.8352 91.1191 100.064 92.3872C101.292 93.6553 102.748 94.6517 104.432 95.3764C106.115 96.101 107.912 96.4633 109.823 96.4633C111.734 96.4633 113.509 96.101 115.147 95.3764C116.785 94.6517 118.241 93.678 119.515 92.4552C120.789 91.2323 121.79 89.783 122.518 88.1073C123.246 86.4316 123.609 84.6426 123.609 82.7404C123.609 80.8382 123.246 79.0719 122.518 77.4415C121.79 75.811 120.811 74.3618 119.583 73.0936C118.354 71.8255 116.898 70.8291 115.215 70.1045C113.531 69.3798 111.734 69.0175 109.823 69.0175Z'
              fill='white'
            />
          </svg>
        </div>
      </article>
      <Divider />
    </>
  );
};
export default InheritancePage;