import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import AdminPanel from '../components/AdminPanel';
import ProductList from '../components/ProductList';

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

const AdminScreen = () => {
  return (
    <div style={styles.container}>
      <h1>Admin Dashboard</h1>
      <nav>
        <NavLink to="/admin" style={styles.navLink} activeClassName="active">
          Admin Panel
        </NavLink>
        <NavLink to="/admin/products" style={styles.navLink} activeClassName="active">
          Product List
        </NavLink>
      </nav>
      <Switch>
        <Route path="/admin" exact component={AdminPanel} />
        <Route path="/admin/products" component={ProductList} />
      </Switch>
    </div>
  );
};

export default AdminScreen;
