import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallerBanners from '../components/SmallerBanners';
import CategorySection from '../components/CategorySection';
import ProductsSection from '../components/ProductsSection';
import DiscountBanners from '../components/DiscountBanners';
import DiscountProducts from '../components/DiscountProducts';
import SummerSaleBanner from '../components/SummerSaleBanner';
import Footer from '../components/Footer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      <Banner />
      <SmallerBanners />
      <CategorySection />
      <ProductsSection />
      <DiscountBanners />
      <DiscountProducts />
      <SummerSaleBanner />
      <Footer />
    </div>
  );
};

export default Home;

