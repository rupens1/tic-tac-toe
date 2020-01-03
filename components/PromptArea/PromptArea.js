/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {
  GAME_RESULT_NO,
  GAME_RESULT_USER,
  GAME_RESULT_AI,
  GAME_RESULT_TIE,
} from '../../constants/game';

export const PromptArea = ({result, onRestart}) => {
  const generateResultText = resultText => {
    switch (resultText) {
      case GAME_RESULT_USER:
        return 'You won the game!';
      case GAME_RESULT_AI:
        return 'AI won the game!';
      case GAME_RESULT_TIE:
        return 'Tie!';
      default:
        return '';
    }
  };

  return (
    <View>
      <Text style={styles.text}>{generateResultText(result)}</Text>
      {result !== GAME_RESULT_NO && (
        <TouchableOpacity onPress={() => onRestart()}>
          <Text style={styles.instructions}>Touch here to play again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  instructions: {
    marginTop: 20,
    color: 'grey',
    marginBottom: 5,
    textAlign: 'center',
  },
});
