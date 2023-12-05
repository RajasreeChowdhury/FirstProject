import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#fff',
    marginTop: '20px',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    padding: '10px 0',
  },
  itemName: {
    flex: '1',
  },
  itemQuantity: {
    marginLeft: '10px',
    color: '#888',
  },
  removeButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  total: {
    marginTop: '20px',
    textAlign: 'right',
    fontSize: '1.2rem',
  },
};

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <div style={styles.container}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((cartItem) => (
            <div key={cartItem.product.id} style={styles.item}>
              <div style={styles.itemName}>
                {cartItem.product.name} - ${cartItem.product.price.toFixed(2)}
              </div>
              <div style={styles.itemQuantity}>Quantity: {cartItem.quantity}</div>
              <button
                style={styles.removeButton}
                onClick={() => handleRemove(cartItem.product.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div style={styles.total}>Total: ${calculateTotal().toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
