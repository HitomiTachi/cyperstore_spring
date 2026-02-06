import React from 'react';
import './SmallerBanners.css';

const SmallerBanners: React.FC = () => {
  return (
    <section className="smaller-banners">
      <div className="banners-container">
        <div className="left-banners">
          <div className="wide-square">
            <div className="banner-card playstation">
              <div className="banner-content">
                <h3 className="banner-card-title">Playstation 5</h3>
                <p className="banner-card-text">
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
                </p>
              </div>
            </div>
          </div>
          <div className="squares">
            <div className="square-banner airpods">
              <div className="banner-content">
                <h3 className="banner-card-title">Apple AirPods Max</h3>
                <p className="banner-card-text">Computational audio. Listen, it's powerful</p>
              </div>
            </div>
            <div className="square-banner vision">
              <div className="banner-content">
                <h3 className="banner-card-title">Apple Vision Pro</h3>
                <p className="banner-card-text">An immersive way to experience entertainment</p>
              </div>
            </div>
          </div>
        </div>
        <div className="big-banner macbook">
          <div className="banner-content">
            <h3 className="banner-card-title">Macbook Air</h3>
            <p className="banner-card-text">
              The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
            </p>
            <button className="banner-button">Shop Now</button>
          </div>
          <div className="macbook-image">
            <span>MacBook Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallerBanners;

