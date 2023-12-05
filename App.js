import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AdminScreen from './screens/AdminScreen';
import UserScreen from './screens/UserScreen';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/admin" component={AdminScreen} />
          <Route path="/user" component={UserScreen} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
