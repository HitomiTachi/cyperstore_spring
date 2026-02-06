import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <div className="footer-logo-section">
            <div className="footer-logo">
              <svg width="66" height="23" viewBox="0 0 66 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="18" fontSize="18" fontWeight="bold" fill="#000">Logo</text>
              </svg>
            </div>
            <p className="footer-text">
              We are a residential interior design firm located in Portland. Our boutique-studio offers more than
            </p>
          </div>
          
          <div className="footer-navigation">
            <div className="footer-section">
              <h4 className="footer-section-title">Services</h4>
              <ul className="footer-links">
                <li><a href="/bonus">Bonus program</a></li>
                <li><a href="/gift-cards">Gift cards</a></li>
                <li><a href="/credit">Credit and payment</a></li>
                <li><a href="/contracts">Service contracts</a></li>
                <li><a href="/account">Non-cash account</a></li>
                <li><a href="/payment">Payment</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-section-title">Assistance to the buyer</h4>
              <ul className="footer-links">
                <li><a href="/find-order">Find an order</a></li>
                <li><a href="/delivery">Terms of delivery</a></li>
                <li><a href="/exchange">Exchange and return of goods</a></li>
                <li><a href="/guarantee">Guarantee</a></li>
                <li><a href="/faq">Frequently asked questions</a></li>
                <li><a href="/terms">Terms of use of the site</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-social">
          <a href="/twitter" className="social-icon" aria-label="Twitter">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6 4.8C12.6 4.8 13.2 4.2 13.4 3.6C12.8 3.8 12.2 4 11.6 4.1C11 3.5 10.1 3.1 9.1 3.1C7.1 3.1 5.5 4.7 5.5 6.7C5.5 6.9 5.5 7.1 5.6 7.3C3.7 7.2 2 6.4 0.8 5.2C0.6 5.5 0.5 5.9 0.5 6.3C0.5 7.1 0.9 7.8 1.5 8.2C1 8.1 0.5 8 0.1 7.8C0.1 7.8 0.1 7.8 0.1 7.9C0.1 9.6 1.2 11 2.8 11.3C2.6 11.4 2.4 11.4 2.2 11.4C2 11.4 1.8 11.4 1.6 11.3C2 12.7 3.2 13.7 4.6 13.7C3.5 14.6 2.1 15.1 0.6 15.1C0.4 15.1 0.2 15.1 0 15.1C1.4 16 3.1 16.5 4.9 16.5C9.1 16.5 11.8 11.5 11.8 7.2C11.8 7.1 11.8 7 11.8 6.9C12.4 6.5 13 6 13.4 5.4L12.6 4.8Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="/facebook" className="social-icon" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C3.6 0 0 3.6 0 8C0 12 2.9 15.3 6.7 15.9V10.3H4.7V8H6.7V6.2C6.7 4.3 7.9 3.1 9.7 3.1C10.6 3.1 11.5 3.3 11.5 3.3V5.2H10.5C9.5 5.2 9.2 5.8 9.2 6.4V8H11.4L11 10.3H9.2V15.9C13.1 15.3 16 12 16 8C16 3.6 12.4 0 8 0Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="/tiktok" className="social-icon" aria-label="TikTok">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 0V5.5C8.5 6.3 7.8 7 7 7C6.2 7 5.5 6.3 5.5 5.5C5.5 4.7 6.2 4 7 4C7.1 4 7.2 4 7.3 4V0H8.5Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="/instagram" className="social-icon" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C5.8 0 5.6 0 4.9 0.1C4.2 0.1 3.7 0.3 3.3 0.4C2.9 0.6 2.5 0.8 2.2 1.1C1.9 1.4 1.7 1.8 1.5 2.2C1.4 2.6 1.2 3.1 1.1 3.8C1 4.5 1 4.7 1 6.9C1 9.1 1 9.3 1.1 10C1.2 10.7 1.4 11.2 1.5 11.6C1.7 12 1.9 12.4 2.2 12.7C2.5 13 2.9 13.2 3.3 13.4C3.7 13.5 4.2 13.7 4.9 13.8C5.6 13.9 5.8 13.9 8 13.9C10.2 13.9 10.4 13.9 11.1 13.8C11.8 13.7 12.3 13.5 12.7 13.4C13.1 13.2 13.5 13 13.8 12.7C14.1 12.4 14.3 12 14.5 11.6C14.6 11.2 14.8 10.7 14.9 10C15 9.3 15 9.1 15 6.9C15 4.7 15 4.5 14.9 3.8C14.8 3.1 14.6 2.6 14.5 2.2C14.3 1.8 14.1 1.4 13.8 1.1C13.5 0.8 13.1 0.6 12.7 0.4C12.3 0.3 11.8 0.1 11.1 0.1C10.4 0 10.2 0 8 0ZM8 1.4C10.1 1.4 10.3 1.4 11 1.5C11.6 1.5 11.9 1.6 12.1 1.7C12.4 1.8 12.6 1.9 12.8 2.1C13 2.3 13.2 2.5 13.3 2.8C13.4 3 13.5 3.3 13.6 3.9C13.7 4.6 13.7 4.8 13.7 6.9C13.7 9 13.7 9.2 13.6 9.9C13.5 10.5 13.4 10.8 13.3 11.1C13.2 11.4 13 11.6 12.8 11.8C12.6 12 12.4 12.2 12.1 12.3C11.9 12.4 11.6 12.5 11 12.6C10.3 12.7 10.1 12.7 8 12.7C5.9 12.7 5.7 12.7 5 12.6C4.4 12.5 4.1 12.4 3.9 12.3C3.6 12.2 3.4 12 3.2 11.8C3 11.6 2.8 11.4 2.7 11.1C2.6 10.8 2.5 10.5 2.4 9.9C2.3 9.2 2.3 9 2.3 6.9C2.3 4.8 2.3 4.6 2.4 3.9C2.5 3.3 2.6 3 2.7 2.8C2.8 2.5 3 2.3 3.2 2.1C3.4 1.9 3.6 1.8 3.9 1.7C4.1 1.6 4.4 1.5 5 1.5C5.7 1.4 5.9 1.4 8 1.4ZM8 4.1C6.2 4.1 4.6 4.7 3.4 5.8C2.2 6.9 1.6 8.5 1.6 10.3C1.6 12.1 2.2 13.7 3.4 14.8C4.5 15.9 6.1 16.5 8 16.5C9.8 16.5 11.4 15.9 12.6 14.8C13.7 13.7 14.3 12.1 14.3 10.3C14.3 8.5 13.7 6.9 12.6 5.8C11.4 4.7 9.8 4.1 8 4.1ZM8 14.4C6.5 14.4 5.1 13.9 4 12.8C2.9 11.7 2.4 10.3 2.4 8.8C2.4 7.3 2.9 5.9 4 4.8C5.1 3.7 6.5 3.2 8 3.2C9.5 3.2 10.9 3.7 12 4.8C13.1 5.9 13.6 7.3 13.6 8.8C13.6 10.3 13.1 11.7 12 12.8C10.9 13.9 9.5 14.4 8 14.4ZM11.1 5.2C10.7 5.2 10.4 4.9 10.4 4.5C10.4 4.1 10.7 3.8 11.1 3.8C11.5 3.8 11.8 4.1 11.8 4.5C11.8 4.9 11.5 5.2 11.1 5.2Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

