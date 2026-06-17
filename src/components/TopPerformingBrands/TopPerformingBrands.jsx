import { useEffect } from 'react';
import { Carousel } from './Carousel';
import UserImage from '../../assets/images/user image.png';
import './TopPerformingBrands.css';

export function TopPerformingBrands() {

  useEffect(() => {
    const cleanup = Carousel();
    return cleanup;
  }, []);

  return (

    <div className="brand-carousel-section">
      <div className="carousel-header">
        <h2 className="header-title">TOP PERFORMING BRANDS IN YOUR CAMPUS</h2>
        <a href="#" className="see-all-btn">See all <span className="arrow-right"><i
          className="fa-solid fa-arrow-right"></i></span></a>
      </div>

      <div className="carousel-container">
        <button className="nav-btn prev-btn" aria-label="Previous     brands"> <span className="arrow-left"><i
          className="fa-solid fa-chevron-left"></i></span>
        </button>

        <div className="carousel-list" id="carouselList">
          <div className="brand-card"><img src={UserImage} alt="" />
            <p>Habeeb Designs</p>
          </div>

          <div className="brand-card"><img img src={UserImage} alt="" />
            <p>Habeeb Designs</p>
          </div>

          <div className="brand-card"><img img src={UserImage} alt="" />
            <p>Habeeb Designs</p>
          </div>

          <div className="brand-card"><img img src={UserImage} alt="" />
            <p>Habeeb Designs</p>
          </div>

          <div className="brand-card"><img img src={UserImage} alt="" />
            <p>Habeeb Designs</p>
          </div>

          <div className="brand-card"><img img src={UserImage} alt="" />
            <p>Habeeb Designs</p>
          </div>

          <div className="brand-card"><img img src={UserImage} alt="" />
            <p>Habeeb Designs</p>
          </div>

          <div className="brand-card"><img img src={UserImage} alt="" />
            <p>Habeeb Designs</p>
          </div>

          <div className="brand-card"><img img src={UserImage} alt="" />
            <p>Habeeb Designs</p>
          </div>

          <div className="brand-card"><img img src={UserImage} alt="" />
            <p>Habeeb Designs</p>
          </div>

          <div className="brand-card"><img img src={UserImage} alt="" />
            <p>Habeeb Designs</p>
          </div>

        </div>

        <button className="nav-btn next-btn" aria-label="Next brands"><span className="arrow-right"><i
          className="fa-solid fa-chevron-right"></i></span></button>
      </div>
    </div>

  );

}