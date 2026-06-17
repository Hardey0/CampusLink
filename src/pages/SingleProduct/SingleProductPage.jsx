
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer'
import axios from 'axios';
import { API_BASE } from '../../config/api';
import { calculateDiscountPrice } from '../../utils/priceDiscount';
import { formatNaira } from '../../utils/formatNaira';
import { Gallery } from './ProductGallery';
import './SingleProductPage.css';

export function SingleProductPage() {

  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_BASE}/products/${productId}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching product:', err);
        setLoading(false);
      });
  }, [productId]);

  useEffect(() => {
    if (product) {
      const cleanup = Gallery();
      return cleanup;
    }
  }, [product]);

  if (loading) {
    return <div>Loading product...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const images = Array.isArray(product.image) ? product.image : [product.image];

  return (

    <div className='single-product-body'>

      <Header />

      <div className="container">

        <header className="header-section">
          <div className="breadcrumbs">
            <Link to='/'> <i className="fa-solid fa-house"></i>
            </Link>
            <i className="fa-solid fa-angle-right"></i>
            <Link to='#'>Top Products</Link>
            <i className="fa-solid fa-angle-right"></i>
            <span>{product.name}</span>
          </div>
          <h2 className="preview-title">Preview Product</h2>
        </header>

        <div className="single-product-card">

          <div className="single-product-gallery" id="productGallery" data-image-list={JSON.stringify(images)}>

            <div className="main-image-placeholder" id="mainImagePlaceholder">
              <img src={null} alt={images[0]} className="main-image" id="mainImage" />
            </div>

            <div className="mobile-image-carousel" id="mobileCarousel">
              <div className="carousel-track" id="carouselTrack">
              </div>
            </div>

            <div className="mobile-image-tracker-container">
              <div className="mobile-image-counter" id="mobileCounter"></div>
            </div>

          </div>

          <div className="single-product-details">
            <div className="product-details-header">
              <h1 className="single-product-name">{product.name}</h1>
              <span className="single-share-icon">
                <i className="fa-solid fa-share-nodes"></i>
              </span>
            </div>

            <p className="single-product-description">
              {product.description}
            </p>

            <div className="price-row">
              <div className="price-label">Price:</div>
              <div className='price-and-discount'>
                {product.discount ?

                  <>
                    <span className="current-price">{formatNaira(calculateDiscountPrice(product.priceNaira, product.discount))}</span>
                    <span className="old-price">{formatNaira(product.priceNaira)}</span>
                    <span className="discount-badge">{`${product.discount}% off`}</span>
                  </>

                  :

                  <span className="current-price">{formatNaira(product.priceNaira)}</span>
                }
              </div>
            </div>

            <div className="category">
              <div className="category-label">Product Category:</div>
              <div className="single-product-category">{product.productcategory}</div>
            </div>

            <div className="rating-row">
              <div className="stars"><img src={`/images/ratings/rating-${product.rating.stars * 10}.png`} alt="rating-image" />
              </div>
              <div className="rating-text">{`${product.rating.stars} / 5 rating`}</div>
            </div>

            <div className="quantity-section">
              <div className="quantity-label">Quantity</div>
              <div className="quantity-counter">
                <button className="counter-btn minus-btn" aria-label="Decrease quantity">
                  <i className="fa-solid fa-minus"></i>
                </button>
                <div className="counter-input">
                  <span>01</span>
                </div>
                <button className="counter-btn plus-btn" aria-label="Increase quantity">
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>

            <div className="action-buttons">
              <button className="save-btn">
                <i className="fa-regular fa-bookmark"></i> Save for Later
              </button>
              <button className="chat-btn" aria-label="Chat with seller">
                <i className="fa-regular fa-comment-dots"></i>
              </button>
            </div>
            <button className="add-to-cart-btn">
              <i className="fa-solid fa-cart-shopping"></i> Add to cart
            </button>

          </div>

        </div>

        <div className="more-images-section">
          <h3 className="more-images-title">MORE IMAGES</h3>
          <div className="thumbnail-list" id="thumbnailList">
          </div>
        </div>

        <div id="imageModal" className="image-modal">
          <span className="close-btn" id="closeModal">&times;</span>

          <div className="modal-content">
            <img id="modalImage" src={null} alt="Full-size Product Image" />
          </div>

          <a className="prev-btn" id="prevBtn">&#10094;</a>
          <a className="next-btn" id="nextBtn">&#10095;</a>
        </div>

      </div>


      <Footer />

    </div>

  );

}