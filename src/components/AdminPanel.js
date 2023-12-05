import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, editProduct } from '../redux/actions/productActions';

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    margin: '10px 0',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  checkboxLabel: {
    marginLeft: '5px',
  },
  button: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

const AdminPanel = ({ selectedProduct }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: selectedProduct ? selectedProduct.id : '',
    name: selectedProduct ? selectedProduct.name : '',
    category: selectedProduct ? selectedProduct.category : '',
    price: selectedProduct ? selectedProduct.price : 0,
    brand: selectedProduct ? selectedProduct.brand : '',
    sizes: selectedProduct ? selectedProduct.sizes : [],
    description: selectedProduct ? selectedProduct.description : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      if (checked) {
        return { ...prevData, sizes: [...prevData.sizes, parseInt(value, 10)] };
      } else {
        return { ...prevData, sizes: prevData.sizes.filter((size) => size !== parseInt(value, 10)) };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProduct) {
      dispatch(editProduct(formData));
    } else {
      dispatch(addProduct(formData));
    }

    setFormData({
      id: '',
      name: '',
      category: '',
      price: 0,
      brand: '',
      sizes: [],
      description: '',
    });
  };

  return (
    <div style={styles.container}>
      <h2>{selectedProduct ? 'Edit Shoe' : 'Add New Shoe'}</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label style={styles.label}>
          Category:
          <input type="text" name="category" value={formData.category} onChange={handleChange} />
        </label>
        <label style={styles.label}>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </label>
        <label style={styles.label}>
          Brand:
          <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
        </label>
        <div style={styles.checkboxContainer}>
          <label style={styles.label}>Sizes:</label>
          {Array.from({ length: 10 }, (_, i) => i + 36).map((size) => (
            <label key={size} style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="size"
                value={size}
                checked={formData.sizes.includes(size)}
                onChange={handleSizeChange}
              />
              {size}
            </label>
          ))}
        </div>
        <label style={styles.label}>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit" style={styles.button}>
          {selectedProduct ? 'Update Shoe' : 'Add Shoe'}
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
