import React, { useState } from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import FilterSection from '../components/FilterSection';
import ProductCard from '../components/ProductCard';
import SortDropdown from '../components/SortDropdown';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
import './ProductsPage.css';

const ProductsPage: React.FC = () => {
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const sortOptions = [
    { label: 'Default sorting', value: 'default' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Newest', value: 'newest' },
    { label: 'Oldest', value: 'oldest' },
  ];

  const products = [
    { name: 'iPhone 14 Pro', price: '$999', originalPrice: '$1099' },
    { name: 'Samsung Galaxy S23 Ultra', price: '$1199', originalPrice: '$1299' },
    { name: 'Google Pixel 7 Pro', price: '$899', originalPrice: '$999' },
    { name: 'OnePlus 11', price: '$699', originalPrice: '$799' },
    { name: 'Xiaomi 13 Pro', price: '$799', originalPrice: '$899' },
    { name: 'Huawei P60 Pro', price: '$899', originalPrice: '$999' },
    { name: 'Sony Xperia 1 V', price: '$1299', originalPrice: '$1399' },
    { name: 'iPhone 13', price: '$699', originalPrice: '$799' },
    { name: 'Samsung Galaxy S22', price: '$599', originalPrice: '$699' },
  ];

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Catalog', path: '/catalog' },
    { label: 'Smartphones' },
  ];

  return (
    <div className="products-page">
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="products-content">
        <div className="products-container">
          <FilterSection />
          
          <div className="products-main">
            <div className="products-header">
              <div className="products-count">
                <span>Selected Products:</span>
                <strong>85</strong>
              </div>
              <SortDropdown
                options={sortOptions}
                value={sortBy}
                onChange={setSortBy}
              />
            </div>
            
            <div className="products-grid">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                />
              ))}
            </div>
            
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;

