import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const OrderTable = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order History</Text>
      {cart.length === 0 ? (
        <Text>No orders yet</Text>
      ) : (
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.th}>Product</Text>
            <Text style={styles.th}>Quantity</Text>
            <Text style={styles.th}>Total</Text>
          </View>
          {cart.map((cartItem) => (
            <View key={cartItem.product.id} style={styles.tableRow}>
              <Text style={styles.td}>{cartItem.product.name}</Text>
              <Text style={styles.td}>{cartItem.quantity}</Text>
              <Text style={styles.td}>${(cartItem.product.price * cartItem.quantity).toFixed(2)}</Text>
            </View>
          ))}
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
  table: {
    width: '100%',
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  th: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    textAlign: 'left',
  },
  td: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
};

export default OrderTable;
