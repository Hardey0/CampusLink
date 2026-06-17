import BlackFridayBanner from '../../assets/images/black friday banner.png';
import './Banner.css';

export function Banner () {

  return (

    <div className="banner">
      <img src={BlackFridayBanner} alt="banner" />
    </div>

  );
}