import styles from './Home.module.css';
import tvIcon from '../../assets/tv.svg';
import phoneIcon from '../../assets/mobile.svg';
import laptopIcon from '../../assets/laptop.svg';
import headphonesIcon from '../../assets/headphones.svg';
import gamepadIcon from '../../assets/gamepad.svg';
import blenderIcon from '../../assets/blender.svg';

export default function Home() {
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
          <div>
            <img src={tvIcon} alt='' />
            <h4>TV</h4>
          </div>
          <div>
            <img src={headphonesIcon} alt='' />
            <h4>Audio</h4>
          </div>
          <div>
            <img src={laptopIcon} alt='' />
            <h4>Laptops</h4>
          </div>
          <div>
            <img src={phoneIcon} alt='' />
            <h4>Phones</h4>
          </div>
          <div>
            <img src={gamepadIcon} alt='' />
            <h4>Gaming</h4>
          </div>
          <div>
            <img src={blenderIcon} alt='' />
            <h4>Appliances</h4>
          </div>
        </div>
      </div>
    </>
  );
}
