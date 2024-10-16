import React from 'react';

import Navigator from './Navigator';
import {ThemeContextProvider} from '~context/themeContext';

import {Provider} from 'react-redux';
import {store} from '~store/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <Navigator />
      </ThemeContextProvider>
    </Provider>
  );
};

export default App;
