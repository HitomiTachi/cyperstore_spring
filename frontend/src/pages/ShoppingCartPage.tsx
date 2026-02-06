import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import CartProduct from '../components/CartProduct';
import OrderSummary from '../components/OrderSummary';
import Footer from '../components/Footer';
import './ShoppingCartPage.css';

interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image?: string;
  quantity: number;
}

const ShoppingCartPage: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Apple iPhone 14 Pro Max',
      price: 1399,
      originalPrice: 1499,
      quantity: 1,
    },
    {
      id: '2',
      name: 'Samsung Galaxy S23 Ultra',
      price: 1199,
      originalPrice: 1299,
      quantity: 1,
    },
    {
      id: '3',
      name: 'MacBook Pro 14"',
      price: 1999,
      originalPrice: 2199,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemove = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout/step1');
    } else {
      alert('Your cart is empty');
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const shipping = 29;

  return (
    <div className="shopping-cart-page">
      <Header />
      
      <div className="cart-content">
        <div className="cart-container">
          <div className="cart-left">
            <h1 className="cart-title">Shopping Cart</h1>
            
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div className="cart-products">
                {cartItems.map(item => (
                  <CartProduct
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={`$${item.price.toFixed(2)}`}
                    originalPrice={item.originalPrice ? `$${item.originalPrice.toFixed(2)}` : undefined}
                    image={item.image}
                    quantity={item.quantity}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemove}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="cart-right">
            <OrderSummary
              subtotal={subtotal}
              tax={tax}
              shipping={shipping}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShoppingCartPage;

