// @flow
// NPM dependencies
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {},
  buttonYes: {
    backgroundColor: '#2ecc71',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonYesText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonNo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNoText: {
    lineHeight: 56,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
