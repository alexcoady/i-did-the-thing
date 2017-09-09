// @flow
// NPM dependencies
import React from 'react';
import { Text, View } from 'react-native';

// App dependencies
import type { FieldProps } from 'shared/types';

type Props = FieldProps;

const FieldStatus = ({ input }: Props) => {

  return (
    <View>
      <Text>{input.value}</Text>
    </View>
  );
};

export default FieldStatus;
