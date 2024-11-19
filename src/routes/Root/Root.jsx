import { Outlet, Link } from 'react-router-dom';
import ShoppingBasketIcon from '../../assets/shopping-basket.svg';
import styles from './Root.module.css';

export default function Root() {
  return (
    <div className={styles.root}>
      <nav className={styles.navigation}>
        <h1>Surge</h1>
        <ul>
          <li>
            <Link className={styles.link} to={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={'shop'}>
              Shop
            </Link>
          </li>
        </ul>
        <div className={styles.basketIconContainer}>
          <Link to={'basket'}>
            <img
              className={styles.basketIcon}
              src={ShoppingBasketIcon}
              alt=''
            />
          </Link>
        </div>
      </nav>
      <div className={styles.outletWrapper}>
        <Outlet />
      </div>
    </div>
  );
}
