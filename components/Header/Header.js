/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Tic Tac Toe</Text>
  </View>
);
