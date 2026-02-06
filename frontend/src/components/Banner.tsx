import React from 'react';
import './Banner.css';

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-titles">
            <h2 className="banner-subtitle">Pro.Beyond.</h2>
            <h1 className="banner-title">IPhone 14 Pro</h1>
          </div>
          <p className="banner-description">
            Created to change everything for the better. For everyone
          </p>
          <button className="banner-button">Shop Now</button>
        </div>
        <div className="banner-image">
          <div className="iphone-placeholder">
            <span>iPhone Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

