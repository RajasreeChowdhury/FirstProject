import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import OrderTable from '../components/OrderTable';

const Tab = createBottomTabNavigator();

const UserScreen = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.heading}>User Dashboard</Text>
        <View style={styles.nav}>
          <NavLink to="/" style={styles.navLink} activeClassName="active" exact>
            <Text>Product List</Text>
          </NavLink>
          <NavLink to="/cart" style={styles.navLink} activeClassName="active">
            <Text>Cart</Text>
          </NavLink>
          <NavLink to="/orders" style={styles.navLink} activeClassName="active">
            <Text>Order History</Text>
          </NavLink>
        </View>
        <Tab.Navigator>
          <Tab.Screen name="Product List" component={ProductList} />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen name="Order History" component={OrderTable} />
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

export default UserScreen;
