import React, { useState } from 'react';
import './ProductDetails.css';

interface DetailSection {
  title: string;
  items: {
    label: string;
    value: string;
  }[];
}

interface ProductDetailsProps {
  sections: DetailSection[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ sections }) => {
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({});
  const [showAll, setShowAll] = useState(false);

  const toggleSection = (index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const visibleSections = showAll ? sections : sections.slice(0, 2);

  return (
    <section className="product-details-section">
      <div className="details-container">
        <h2 className="details-title">Details</h2>
        <p className="details-intro">
          Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.
        </p>

        <div className="details-content">
          {visibleSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="detail-section">
              <h3 className="section-title">{section.title}</h3>
              <div className="section-items">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="detail-line">
                    <span className="detail-label">{item.label}</span>
                    <span className="detail-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {sections.length > 2 && (
          <button
            className="view-more-button"
            onClick={() => setShowAll(!showAll)}
          >
            <span>{showAll ? 'View Less' : 'View More'}</span>
            <svg
              className={`arrow-icon ${showAll ? 'expanded' : ''}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;

