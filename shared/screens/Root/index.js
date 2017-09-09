// @flow
// NPM dependencies
import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

const BUTTON_ID_HISTORY = 'Root/BUTTON_ID_HISTORY';

class Root extends PureComponent<void, void> {

  render () {
    return (
      <View>
        <Text>Did you do the thing?</Text>
      </View>
    );
  }
}

Root.navigatorButtons = {
  rightButtons: [{
    title: 'History',
    id: BUTTON_ID_HISTORY,
  }],
};

export default Root;
