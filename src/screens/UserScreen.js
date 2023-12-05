import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import OrderTable from '../components/OrderTable';

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  navLink: {
    marginRight: '20px',
    textDecoration: 'none',
    color: '#333',
  },
};

const UserScreen = () => {
  return (
    <div style={styles.container}>
      <h1>User Dashboard</h1>
      <nav>
        <NavLink to="/" style={styles.navLink} activeClassName="active" exact>
          Product List
        </NavLink>
        <NavLink to="/cart" style={styles.navLink} activeClassName="active">
          Cart
        </NavLink>
        <NavLink to="/orders" style={styles.navLink} activeClassName="active">
          Order History
        </NavLink>
      </nav>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/orders" component={OrderTable} />
      </Switch>
    </div>
  );
};

export default UserScreen;
