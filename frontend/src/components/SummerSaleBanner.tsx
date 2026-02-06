import React from 'react';
import './SummerSaleBanner.css';

const SummerSaleBanner: React.FC = () => {
  return (
    <section className="summer-sale-banner">
      <div className="banner-container">
        <div className="banner-content">
          <h2 className="banner-title">Big Summer Sale</h2>
          <p className="banner-description">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>
          <button className="banner-button">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default SummerSaleBanner;

