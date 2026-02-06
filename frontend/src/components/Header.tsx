import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header-top">
      <div className="header-container">
        <div className="logo">
          <svg width="66" height="23" viewBox="0 0 66 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="18" fontSize="18" fontWeight="bold" fill="#000">Logo</text>
          </svg>
        </div>
        
        <div className="search-field">
          <svg className="search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        
        <nav className="navigation">
          <a href="/" className="nav-link">Home</a>
          <a href="/products" className="nav-link">About</a>
          <a href="/contact" className="nav-link">Contact Us</a>
          <a href="/blog" className="nav-link">Blog</a>
        </nav>
        
        <div className="header-icons">
          <button className="icon-button">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 28C16 28 6 20 6 13C6 9.68629 8.68629 7 12 7C13.5913 7 15.1174 7.63214 16.2426 8.75736C17.3679 9.88258 18 11.4087 18 13C18 20 8 28 8 28H16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="icon-button">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8H6C4.89543 8 4 8.89543 4 10V26C4 27.1046 4.89543 28 6 28H26C27.1046 28 28 27.1046 28 26V10C28 8.89543 27.1046 8 26 8H24M8 8V6C8 4.89543 8.89543 4 10 4H22C23.1046 4 24 4.89543 24 6V8M8 8H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="icon-button">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8C13.7909 8 12 9.79086 12 12C12 14.2091 13.7909 16 16 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 26C8 22.6863 10.6863 20 14 20H18C21.3137 20 24 22.6863 24 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

