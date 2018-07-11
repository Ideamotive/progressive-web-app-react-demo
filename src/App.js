import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import styled, { ThemeProvider, injectGlobal} from 'styled-components';

// Reducers
import reducer from './reducers/index';


// Containers
import Navigation from './containers/Navigation/Navigation';
import withConfigs from './containers/withConfigs/withConfigs';


// Middleware
import { api } from './api/apiMiddleware';
import { dataCache } from './dateCache/dataCacheMiddleware';

// Actions
import { loadCache } from './dateCache/actions';

import theme from './components/theme';

const store = createStore(reducer, applyMiddleware(api, dataCache));
store.dispatch(loadCache());

injectGlobal`
  @font-face {
     font-family: 'Raleway', sans-serif;
     src: url('https://fonts.googleapis.com/css?family=Raleway');
  }
  font-family: Raleway;
`;

const NavigationWithConfigs = withConfigs(Navigation);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <ThemeProvider theme={theme}>
            <NavigationWithConfigs/>
          </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
