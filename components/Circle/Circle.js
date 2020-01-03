/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

export const Circle = ({xTranslate, yTranslate, color}) => {
  return (
    <View
      style={[
        styles.container,
        {
          transform: [
            {translateX: xTranslate ? xTranslate : 10},
            {translateY: yTranslate ? yTranslate : 10},
          ],
        },
      ]}>
      <View style={styles.innerCircle} />
    </View>
  );
};
