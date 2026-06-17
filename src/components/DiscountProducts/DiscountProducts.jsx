
import { useEffect } from 'react';
import products from '../../data/product.json';
import { calculateDiscountPrice } from '../../utils/priceDiscount';
import { formatNaira } from '../../utils/formatNaira';
import { FlashCarousel } from './FlashCarousel';
import './DiscountProducts.css';

export function DiscountProducts() {

  console.log(products);

  useEffect(() => {
    const cleanup = FlashCarousel();
    return cleanup;
  }, []);

  return (

    <div className="sale-wrapper">

      <div className="sale-promo-banner">
        <h1>
          Hurry, Flash Sale <br />
          <span>20% OFF!</span>
        </h1>
        <p>
          For the next 24 hours only, enjoy 20% off on selected products. Stock up on your favorites today!
        </p>
        <button className="sale-shop-button">
          <span>Shop Now</span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div className="sale-product-area">

        <div id="scroll-progress-container" className="scroll-progress-container">
          <div id="scroll-progress-bar" className="scroll-progress-bar"></div>
        </div>

        <div id="product-carousel" className="product-carousel">

          {products.filter(product => product.discountPercent >= 20).map((product) => {
            product.discountPercent >= 20;
            return (
              <a key={product.id} href={`/product/${product.id}`}>

                <div className="flash-product-card">
                  <div className="flash-image-container">
                    <img src={product.image[0]} alt={product.image[0]}
                      className="flash-product-image" />
                    <button className="flash-heart-icon flash-icon-base">
                      <i className="fa-regular fa-heart"></i>
                    </button>
                    <button className="flash-add-icon flash-icon-base">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <div className="flash-text-container">
                    <h3 className="flash-product-title">{product.name}</h3>
                    <div className="flash-price-container">
                      {
                        <>
                          <span className="flash-discounted-price">{formatNaira(calculateDiscountPrice(product.priceNaira, product.discountPercent))}</span>
                          <span className="flash-original-price">{formatNaira(product.priceNaira)}</span>
                          <span className="flash-discount-tag">{`-${product.discountPercent}%`}</span>
                        </>
                      }
                    </div>
                    <div className="flash-product-details">
                      <p className="flash-category-info">
                        <span className="flash-icon">
                          <i className="fa-solid fa-truck-fast"></i></span>
                        <span>{product.productCategory}</span>
                      </p>
                      <p className="flash-distributor-feedback">{product.userfeedsBack}</p>
                    </div>
                  </div>
                </div>

              </a>
            )
          })}

        </div>

        <div id="carousel-dots" className="carousel-dots">

        </div>
      </div>

    </div>

  );
}