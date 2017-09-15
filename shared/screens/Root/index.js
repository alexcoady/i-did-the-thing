// @flow
// NPM dependencies
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Text, View } from 'react-native';

// App dependencies
import { create } from 'shared/records/actions';
import { FieldStatus } from 'shared/records/components';
import { getTodayRecord } from 'shared/records/selectors';
import type { Record, RootRecord, Status } from 'shared/records/types';

const BUTTON_ID_HISTORY = 'Root/BUTTON_ID_HISTORY';

type Props =  {
  create: (RootRecord) => void,
  todayRecord?: Record,
};

class Root extends PureComponent<Props, void> {

  handleUpdate (status: Status) {
    this.props.create({
      status,
      timestamp: Date.now(),
    });
  } 

  render () {

    const { todayRecord } = this.props;

    return (
      <View>
        {!todayRecord && (
          <View>
            <Text>Did you do the thing?</Text>
            <FieldStatus update={this.handleUpdate.bind(this)} />
          </View>
        )}
        {todayRecord && (
          <View>
            <Text>You already told us</Text>
            <Text>{JSON.stringify(todayRecord)}</Text>
          </View>
        )}
      </View>
    );
  }
}

const mapState = createStructuredSelector({
  todayRecord: getTodayRecord,
});

const mapDispatch = {
  create,
};

const ConnectedComponent = connect(mapState, mapDispatch)(Root);

ConnectedComponent.navigatorButtons = {
  rightButtons: [{
    title: 'History',
    id: BUTTON_ID_HISTORY,
  }],
};

export default ConnectedComponent;
