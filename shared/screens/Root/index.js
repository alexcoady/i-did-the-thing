// @flow
// NPM dependencies
import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

class Root extends PureComponent<void, void> {

  render () {
    return (
      <View>
        <Text>Did you do the thing?</Text>
      </View>
    );
  }
}

export default Root;
