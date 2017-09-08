// @flow
// NPM dependencies
import { Navigation } from 'react-native-navigation';

// App dependencies
import { ROOT } from './screens/constants';
import Root from './screens/Root';

export default (store: any, Provider: any) => {
  Navigation.registerComponent(ROOT, () => Root, store, Provider);
};
