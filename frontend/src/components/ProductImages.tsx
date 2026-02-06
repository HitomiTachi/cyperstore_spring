import React, { useState } from 'react';
import './ProductImages.css';

interface ProductImagesProps {
  images?: string[];
  mainImage?: string;
}

const ProductImages: React.FC<ProductImagesProps> = ({ images, mainImage }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const defaultImages = [
    'https://via.placeholder.com/413x516',
    'https://via.placeholder.com/75x93',
    'https://via.placeholder.com/75x93',
    'https://via.placeholder.com/75x93',
    'https://via.placeholder.com/75x93',
  ];

  const imageList = images || defaultImages;
  const currentMainImage = mainImage || imageList[0];

  return (
    <div className="product-images">
      <div className="image-thumbnails">
        {imageList.slice(1, 5).map((image, index) => (
          <button
            key={index}
            className={`thumbnail ${selectedImage === index + 1 ? 'active' : ''}`}
            onClick={() => setSelectedImage(index + 1)}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>
      <div className="main-image">
        <img src={currentMainImage} alt="Product" />
      </div>
    </div>
  );
};

export default ProductImages;

