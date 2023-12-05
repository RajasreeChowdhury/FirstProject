import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.product}>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>Price: ${item.price.toFixed(2)}</Text>
      </View>
      <Button
        title="Add to Cart"
        onPress={() => handleAddToCart(item)}
        style={styles.addToCartButton}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
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
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  addToCartButton: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: 8,
    borderRadius: 4,
  },
};

export default ProductList;
