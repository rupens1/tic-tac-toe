/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

export const Cross = ({xTranslate, yTranslate, color}) => (
  <View
    style={[
      styles.container,
      {
        transform: [
          {translateX: (xTranslate ? xTranslate : 10) + 35},
          {translateY: (yTranslate ? yTranslate : 10) - 12},
        ],
      },
    ]}>
    <View
      style={[
        styles.line,
        {
          transform: [{rotate: '45deg'}],
        },
      ]}
    />
    <View
      style={[
        styles.line,
        {
          transform: [{rotate: '135deg'}],
        },
      ]}
    />
  </View>
);
