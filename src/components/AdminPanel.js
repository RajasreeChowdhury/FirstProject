import React, { useState } from 'react';
import { View, Text, TextInput, CheckBox, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addProduct, editProduct } from '../redux/actions/productActions';

const AdminPanel = ({ selectedProduct }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: selectedProduct ? selectedProduct.id : '',
    name: selectedProduct ? selectedProduct.name : '',
    category: selectedProduct ? selectedProduct.category : '',
    price: selectedProduct ? selectedProduct.price : '0',
    brand: selectedProduct ? selectedProduct.brand : '',
    sizes: selectedProduct ? selectedProduct.sizes : [],
    description: selectedProduct ? selectedProduct.description : '',
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSizeChange = (size) => {
    setFormData((prevData) => {
      if (prevData.sizes.includes(size)) {
        return { ...prevData, sizes: prevData.sizes.filter((s) => s !== size) };
      } else {
        return { ...prevData, sizes: [...prevData.sizes, size] };
      }
    });
  };

  const handleSubmit = () => {
    if (selectedProduct) {
      dispatch(editProduct(formData));
    } else {
      dispatch(addProduct(formData));
    }
    
    setFormData({
      id: '',
      name: '',
      category: '',
      price: '0',
      brand: '',
      sizes: [],
      description: '',
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>{selectedProduct ? 'Edit Shoe' : 'Add New Shoe'}</Text>
      <View style={styles.form}>
        <View style={styles.formItem}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            value={formData.name}
            onChangeText={(value) => handleChange('name', value)}
          />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.label}>Category:</Text>
          <TextInput
            style={styles.input}
            value={formData.category}
            onChangeText={(value) => handleChange('category', value)}
          />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.label}>Price:</Text>
          <TextInput
            style={styles.input}
            value={formData.price}
            onChangeText={(value) => handleChange('price', value)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.label}>Brand:</Text>
          <TextInput
            style={styles.input}
            value={formData.brand}
            onChangeText={(value) => handleChange('brand', value)}
          />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.label}>Sizes:</Text>
          <View style={styles.checkboxContainer}>
            {Array.from({ length: 10 }, (_, i) => i + 36).map((size) => (
              <View key={size} style={styles.checkboxLabel}>
                <CheckBox
                  value={formData.sizes.includes(size)}
                  onValueChange={() => handleSizeChange(size)}
                />
                <Text>{size}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.formItem}>
          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={styles.input}
            value={formData.description}
            onChangeText={(value) => handleChange('description', value)}
            multiline
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{selectedProduct ? 'Update Shoe' : 'Add Shoe'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    flexGrow: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    flex: 1,
  },
  formItem: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  checkboxLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
};

export default AdminPanel;
