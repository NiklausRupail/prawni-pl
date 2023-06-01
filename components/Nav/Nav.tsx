'use client';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.scss';
import Link from 'next/link';
import HomeIcon from 'Icons/HomeIcon';
import BurgerMenuIcon from 'Icons/BurgerMenuIcon';
import HamburgerMenu from 'components/HamburgerMenu/HamburgerMenu';

const Nav = () => {
  const searchParams = usePathname();

  return (
    <>
      <nav className={styles.nav}>
        <h3>Prawni.pl</h3>
        <div className={styles.links}>
          {searchParams === '/' ? (
            <h5 className='activeNavLink'>Strona Główna</h5>
          ) : (
            <Link href={'/'}>
              <h5>Strona Główna</h5>
            </Link>
          )}
          {searchParams === '/nasz-zespol' ? (
            <h5 className='activeNavLink'>Nasz Zespół</h5>
          ) : (
            <Link href={'/nasz-zespol'}>
              <h5>Nasz Zespół</h5>
            </Link>
          )}
          <Link href={'/#servicesSection'}>
            <h5>Usługi</h5>
          </Link>

          {searchParams === '/opinie' ? (
            <h5 className='activeNavLink'>Opinie</h5>
          ) : (
            <Link href={'/opinie'}>
              <h5>Opinie</h5>
            </Link>
          )}
        </div>
      </nav>
      <nav className={styles.mobileNav}>
        <h3>Prawni.pl</h3>
        <div className={styles.navIcons}>
          <Link href={'/'}>
            <HomeIcon />
          </Link>
          <>
            <HamburgerMenu />
          </>
        </div>
      </nav>
    </>
  );
};

export default Nav;
