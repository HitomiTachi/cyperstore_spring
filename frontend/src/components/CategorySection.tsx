import React from 'react';
import './CategorySection.css';

const CategorySection: React.FC = () => {
  const categories = [
    { name: 'Phones', icon: '📱' },
    { name: 'Smart Watches', icon: '⌚' },
    { name: 'Cameras', icon: '📷' },
    { name: 'Headphones', icon: '🎧' },
    { name: 'Computers', icon: '💻' },
    { name: 'Gaming', icon: '🎮' },
  ];

  return (
    <section className="category-section">
      <div className="category-container">
        <div className="category-top">
          <h2 className="category-title">Browse By Category</h2>
          <div className="category-arrows">
            <button className="arrow-button">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 24L12 16L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="arrow-button">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8L20 16L12 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <span className="category-name">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

