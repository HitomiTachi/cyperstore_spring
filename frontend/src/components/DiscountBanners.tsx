import React from 'react';
import './DiscountBanners.css';

const DiscountBanners: React.FC = () => {
  const banners = [
    { title: 'Popular Products', description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.', image: 'iPad' },
    { title: 'Ipad Pro', description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.', image: 'iPad Pro' },
    { title: 'Samsung Galaxy', description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.', image: 'Galaxy' },
    { title: 'Macbook Pro', description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.', image: 'MacBook' },
  ];

  return (
    <section className="discount-banners">
      <div className="banners-grid">
        {banners.map((banner, index) => (
          <div key={index} className="discount-banner">
            <div className="banner-image-placeholder">
              <span>{banner.image}</span>
            </div>
            <div className="banner-content">
              <h3 className="banner-title">{banner.title}</h3>
              <p className="banner-description">{banner.description}</p>
              <button className="banner-button">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscountBanners;

