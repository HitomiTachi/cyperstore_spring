import React, { useState } from 'react';
import './Reviews.css';

interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  comment: string;
  images?: string[];
}

interface ReviewsProps {
  overallRating: number;
  totalReviews: number;
  ratingBreakdown: {
    excellent: number;
    good: number;
    average: number;
    belowAverage: number;
    poor: number;
  };
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({
  overallRating,
  totalReviews,
  ratingBreakdown,
  reviews,
}) => {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={i < rating ? '#FFD700' : 'none'}
        stroke={i < rating ? '#FFD700' : '#e5e5e5'}
        strokeWidth="2"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ));
  };

  const getPercentage = (count: number) => {
    return totalReviews > 0 ? (count / totalReviews) * 100 : 0;
  };

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2 className="reviews-title">Reviews</h2>
          
          <div className="overall-rating">
            <div className="rating-summary">
              <div className="rating-number">{overallRating.toFixed(1)}</div>
              <div className="rating-stars">{renderStars(Math.round(overallRating))}</div>
              <div className="rating-count">{totalReviews} reviews</div>
            </div>
            
            <div className="rating-breakdown">
              <div className="breakdown-item">
                <span className="breakdown-label">Excellent</span>
                <div className="breakdown-bar">
                  <div
                    className="breakdown-fill"
                    style={{ width: `${getPercentage(ratingBreakdown.excellent)}%` }}
                  />
                </div>
                <span className="breakdown-count">{ratingBreakdown.excellent}</span>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-label">Good</span>
                <div className="breakdown-bar">
                  <div
                    className="breakdown-fill"
                    style={{ width: `${getPercentage(ratingBreakdown.good)}%` }}
                  />
                </div>
                <span className="breakdown-count">{ratingBreakdown.good}</span>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-label">Average</span>
                <div className="breakdown-bar">
                  <div
                    className="breakdown-fill"
                    style={{ width: `${getPercentage(ratingBreakdown.average)}%` }}
                  />
                </div>
                <span className="breakdown-count">{ratingBreakdown.average}</span>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-label">Below Average</span>
                <div className="breakdown-bar">
                  <div
                    className="breakdown-fill"
                    style={{ width: `${getPercentage(ratingBreakdown.belowAverage)}%` }}
                  />
                </div>
                <span className="breakdown-count">{ratingBreakdown.belowAverage}</span>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-label">Poor</span>
                <div className="breakdown-bar">
                  <div
                    className="breakdown-fill"
                    style={{ width: `${getPercentage(ratingBreakdown.poor)}%` }}
                  />
                </div>
                <span className="breakdown-count">{ratingBreakdown.poor}</span>
              </div>
            </div>
          </div>

          <div className="review-search">
            <input
              type="text"
              placeholder="Search reviews..."
              className="search-input"
            />
          </div>
        </div>

        <div className="reviews-list">
          {visibleReviews.map((review) => (
            <div key={review.id} className="review-item">
              <div className="review-avatar">
                <div className="avatar-circle">
                  {review.author.charAt(0).toUpperCase()}
                </div>
              </div>
              <div className="review-content">
                <div className="review-header">
                  <div className="review-author-info">
                    <h4 className="review-author">{review.author}</h4>
                    <div className="review-stars">{renderStars(review.rating)}</div>
                  </div>
                  <span className="review-date">{review.date}</span>
                </div>
                <p className="review-comment">{review.comment}</p>
                {review.images && review.images.length > 0 && (
                  <div className="review-images">
                    {review.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Review ${index + 1}`}
                        className="review-image"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {reviews.length > 3 && (
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

export default Reviews;

