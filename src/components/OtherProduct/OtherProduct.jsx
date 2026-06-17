
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE } from '../../config/api';
import { calculateDiscountPrice } from '../../utils/priceDiscount';
import { formatNaira } from '../../utils/formatNaira';
import './OtherProduct.css';

export function OtherProduct() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_BASE}/products`)
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (

    <div className="other-products-section">
      <div className="section-header">
        <h2>OTHER PRODUCTS</h2>
        <button className="see-all-button">See all <i className="fa-solid fa-arrow-right"></i></button>
      </div>

      <div className="product-grid">

        {products.map((product) => {

          return (
            <a href={`/product/${product._id || product.id}`} key={product._id || product.id}>
              <div className="product-card">
                <div className="product-image-container">
                  <img src={Array.isArray(product.image) ? product.image[0] : product.image} alt={product.name} className="product-image" />
                  <button className="heart-icon">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                  <button className="add-to-cart-icon">
                    <i className="fa-light fa-plus"></i>
                  </button>
                </div>
                <h3 className="product-title">{product.name}</h3>
                <div className="product-price-info">
                  {product.discount ?
                    <>
                      <span className="new-discount-price">{formatNaira(calculateDiscountPrice(product.priceNaira, product.discount))}</span>
                      <span className="old-real-price">{formatNaira(product.priceNaira)}</span>
                      <span className="price-discount-badge">{`-${product.discount}%`}</span>
                    </> :

                    <>
                      <span className="new-discount-price">{formatNaira(product.priceNaira)}</span>
                    </>
                  }

                </div>
                <div className="product-details">
                  <p className="category-info"><span className="icon"><i className="fa-solid fa-truck-fast"></i></span>{product.productcategory}</p>
                  <p className="distributor-feedback">{product.feedback}</p>
                </div>
              </div>
            </a>
          )

        })}

      </div>
    </div>


  );
}