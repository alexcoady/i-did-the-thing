// @flow
// NPM dependencies
import { AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

// App dependencies
import reducer from './reducer';
import register from './register';
import { ROOT } from './screens/constants';
import { enhancer } from './store';

const store = createStore(reducer, enhancer);

register(store, Provider);

const persistOptions = {
  storage: AsyncStorage,
  blacklist: ['form'],
};

persistStore(store, persistOptions, () => {

  // Start app
  Navigation.startSingleScreenApp({
    screen: {
      screen: ROOT,
    },
  });
});
