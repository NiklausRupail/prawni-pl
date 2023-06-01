import { slide as Menu } from 'react-burger-menu';
import styles from './HamburgerMenu.module.scss';

const HamburgerMenu = () => (
  <div className='relative p-2'>
    <Menu
      customBurgerIcon={<HamburgerIcon />}
      width={'auto'}
      className='left-0 top-12'
    >
      <Links />
    </Menu>
  </div>
);
const HamburgerIcon = () => (
  <svg
    width='30'
    height='30'
    viewBox='0 0 61 46'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M3 3H58' stroke='black' strokeWidth='5' strokeLinecap='round' />
    <path d='M3 23H58' stroke='black' strokeWidth='5' strokeLinecap='round' />
    <path d='M3 43H58' stroke='black' strokeWidth='5' strokeLinecap='round' />
  </svg>
);

export const Links = () => (
  <>
    <a href={'/'}>
      <h5 className={styles.prawni}>Prawni.pl</h5>
    </a>

    <a className={styles.links} href={'/nasz-zespol'}>
      <h5>Zespół</h5>
    </a>

    <a className={styles.links} href={'/#servicesSection'}>
      <h5>Usługi</h5>
    </a>

    <a className={styles.links} href={'/opinie'}>
      <h5>Opinie</h5>
    </a>
    <a className={styles.links} href={'/#contactSection'}>
      <h5>Kontakt</h5>
    </a>
  </>
);

export default HamburgerMenu;
