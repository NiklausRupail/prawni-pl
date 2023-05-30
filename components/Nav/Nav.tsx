'use client';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.scss';
import Link from 'next/link';

const Nav = () => {
  const searchParams = usePathname();

  return (
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
          <Link href={'/'}>
            <h5>Nasz Zespół</h5>
          </Link>
        )}
        <h5>Usługi</h5>
        {searchParams === '/opinie' ? (
          <h5 className='activeNavLink'>Opinie</h5>
        ) : (
          <Link href={'/'}>
            <h5>Opinie</h5>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
