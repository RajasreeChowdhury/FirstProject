import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AdminPanel from '../components/AdminPanel';
import ProductList from '../components/ProductList';

const Tab = createBottomTabNavigator();

const AdminScreen = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.heading}>Admin Dashboard</Text>
        <View style={styles.nav}>
          <NavLink to="/admin" style={styles.navLink} activeClassName="active">
            <Text>Admin Panel</Text>
          </NavLink>
          <NavLink to="/admin/products" style={styles.navLink} activeClassName="active">
            <Text>Product List</Text>
          </NavLink>
        </View>
        <Tab.Navigator>
          <Tab.Screen name="Admin Panel" component={AdminPanel} />
          <Tab.Screen name="Product List" component={ProductList} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  nav: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  navLink: {
    marginRight: 20,
    textDecorationLine: 'none',
    color: '#333',
  },
};

export default AdminScreen;
