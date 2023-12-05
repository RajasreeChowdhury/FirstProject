import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.itemDetails}>
        <Text>{item.product.name} - ${item.product.price.toFixed(2)}</Text>
        <Text>Quantity: {item.quantity}</Text>
      </View>
      <Button
        title="Remove"
        onPress={() => handleRemove(item.product.id)}
        color="#f44336"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <View>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.product.id}
            renderItem={renderItem}
          />
          <Text style={styles.total}>Total: ${calculateTotal().toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  itemDetails: {
    flex: 1,
  },
  total: {
    marginTop: 20,
    textAlign: 'right',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default Cart;
