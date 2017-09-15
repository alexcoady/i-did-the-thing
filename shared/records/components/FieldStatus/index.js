// @flow
// NPM dependencies
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// Feature dependencies
import type { Status } from './../../types';

// Component dependencies
import style from './style';

type Props = {
  update: (Status) => void,
};

const FieldStatus = ({ update }: Props) => {
  
  return (
    <View style={style.root}>
      <TouchableOpacity onPress={() => update('YES')}>
        <View style={style.buttonYes}>
          <Text style={style.buttonYesText}>I did the thing!</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => update('NO')}>
        <View style={style.buttonNo}>
          <Text style={style.buttonNoText}>{'I didn\'t do the thing!'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FieldStatus;
