import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductImages from '../components/ProductImages';
import ProductInfo from '../components/ProductInfo';
import ProductDetails from '../components/ProductDetails';
import Reviews from '../components/Reviews';
import RelatedProducts from '../components/RelatedProducts';
import Footer from '../components/Footer';
import './ProductDetailsPage.css';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Catalog', path: '/catalog' },
    { label: 'Smartphones', path: '/products' },
    { label: 'Apple', path: '/products?brand=apple' },
    { label: 'iPhone 14 Pro Max' },
  ];

  const productDetails = [
    {
      title: 'Screen',
      items: [
        { label: 'Screen diagonal', value: '6.7"' },
        { label: 'The screen resolution', value: '2796x1290' },
        { label: 'The screen refresh rate', value: '120 Hz' },
        { label: 'The pixel density', value: '460 ppi' },
        { label: 'Screen type', value: 'OLED' },
        { label: 'Additionally', value: 'Dynamic Island Always-On display HDR display True Tone Wide color (P3)' },
      ],
    },
    {
      title: 'CPU',
      items: [
        { label: 'CPU', value: 'A16 Bionic' },
        { label: 'Number of cores', value: '6' },
      ],
    },
  ];

  const reviews = [
    {
      id: '1',
      author: 'Grace Carey',
      date: '24 January, 2023',
      rating: 5,
      comment: "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn't be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn't connect with my data plan, since the new phones don't have the physical Sim tray anymore, but couldn't have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤",
    },
    {
      id: '2',
      author: 'Ronald Richards',
      date: '24 January, 2023',
      rating: 5,
      comment: "This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin's) So if you want a phone that's going to last grab an iPhone 14 pro max and get several cords and plugs.",
    },
    {
      id: '3',
      author: 'Darcy King',
      date: '24 January, 2023',
      rating: 4,
      comment: 'I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update: otherwise, love this phone! Came in great condition',
      images: [
        'https://via.placeholder.com/118x88',
        'https://via.placeholder.com/118x88',
      ],
    },
  ];

  return (
    <div className="product-details-page">
      <Header />
      <Breadcrumbs items={breadcrumbItems} />

      <div className="product-main">
        <div className="product-container">
          <div className="product-images-section">
            <ProductImages />
          </div>
          <div className="product-info-section">
            <ProductInfo
              title="Apple iPhone 14 Pro Max"
              price="$1399"
              originalPrice="$1499"
              colors={[
                { name: 'Black', value: '#000000' },
                { name: 'Silver', value: '#C0C0C0' },
                { name: 'Gold', value: '#FFD700' },
                { name: 'Blue', value: '#0066CC' },
                { name: 'Purple', value: '#800080' },
              ]}
              memoryOptions={['128GB', '256GB', '512GB', '1TB']}
              details={[
                { label: 'Screen size', value: '6.7"' },
                { label: 'CPU', value: 'Apple A16 Bionic' },
                { label: 'Number of Cores', value: '6' },
                { label: 'Main camera', value: '48-12-12 MP' },
                { label: 'Front-camera', value: '12 MP' },
                { label: 'Battery capacity', value: '4323 mAh' },
              ]}
              description="Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display."
            />
          </div>
        </div>
      </div>

      <ProductDetails sections={productDetails} />

      <Reviews
        overallRating={4.8}
        totalReviews={123}
        ratingBreakdown={{
          excellent: 100,
          good: 11,
          average: 3,
          belowAverage: 8,
          poor: 1,
        }}
        reviews={reviews}
      />

      <RelatedProducts />

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;

