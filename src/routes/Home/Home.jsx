import styles from './Home.module.css';
import tvIcon from '../../assets/tv.svg';
import phoneIcon from '../../assets/mobile.svg';
import laptopIcon from '../../assets/laptop.svg';
import headphonesIcon from '../../assets/headphones.svg';
import gamepadIcon from '../../assets/gamepad.svg';
import blenderIcon from '../../assets/blender.svg';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const goToShopCategory = (category) => {
    navigate('/shop', { state: { category } });
  };

  return (
    <>
      <div className={styles.top}>
        <h2>
          Transform the ordinary into extraordinary with cutting-edge
          electronics that redefine your lifestyle!
        </h2>
      </div>
      <div className={styles.categoryBrowse}>
        <h3>Browse by category</h3>
        <div className={styles.categoriesContainer}>
          <div
            onClick={() => {
              goToShopCategory('tv');
            }}
          >
            <img src={tvIcon} alt='' />
            <h4>TV</h4>
          </div>
          <div
            onClick={() => {
              goToShopCategory('audio');
            }}
          >
            <img src={headphonesIcon} alt='' />
            <h4>Audio</h4>
          </div>
          <div
            onClick={() => {
              goToShopCategory('laptop');
            }}
          >
            <img src={laptopIcon} alt='' />
            <h4>Laptops</h4>
          </div>
          <div
            onClick={() => {
              goToShopCategory('mobile');
            }}
          >
            <img src={phoneIcon} alt='' />
            <h4>Phones</h4>
          </div>
          <div
            onClick={() => {
              goToShopCategory('gaming');
            }}
          >
            <img src={gamepadIcon} alt='' />
            <h4>Gaming</h4>
          </div>
          <div
            onClick={() => {
              goToShopCategory('appliances');
            }}
          >
            <img src={blenderIcon} alt='' />
            <h4>Appliances</h4>
          </div>
        </div>
      </div>
    </>
  );
}
