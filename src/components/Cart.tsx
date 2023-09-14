import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useContext(CartContext);

  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_PRODUCT', payload: { product } });
  };

  const handleRemoveFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: productId });
  };

  const handleIncrementQuantity = (productId: number) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: productId });
  };

  const handleDecrementQuantity = (productId: number) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: productId });
  };

  return (
    <div className='cart'>
      <ul>
      <h2>Shopping Cart</h2>
        {state.cartItems.map(item => (
          <li key={item.product.id}>
            {item.product.title} - {item.product.description} - {item.product.price} kr - Amount: {item.quantity}
            <div>
            <button onClick={() => handleIncrementQuantity(item.product.id)}>+</button>
            <button onClick={() => handleDecrementQuantity(item.product.id)}>-</button>
            <button onClick={() => handleRemoveFromCart(item.product.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
