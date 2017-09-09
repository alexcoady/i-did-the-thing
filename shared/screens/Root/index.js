// @flow
// NPM dependencies
import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { Text, View } from 'react-native';

// App dependencies
import { FieldStatus } from 'shared/records/components';
import type { FormProps } from 'shared/types';

const BUTTON_ID_HISTORY = 'Root/BUTTON_ID_HISTORY';

type Props = FormProps;

class Root extends PureComponent<Props, void> {

  render () {
    return (
      <View>
        <Field component={FieldStatus} name="status" />
        <Text>Did you do the thing?</Text>
      </View>
    );
  }
}

const ConnectedComponent = compose(
  reduxForm({
    form: 'record',
  }),
)(Root);

ConnectedComponent.navigatorButtons = {
  rightButtons: [{
    title: 'History',
    id: BUTTON_ID_HISTORY,
  }],
};

export default ConnectedComponent;
