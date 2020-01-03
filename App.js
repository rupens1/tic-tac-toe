/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {Header, GameBoard} from './components';
import {styles} from './appStyles';

export const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <View style={styles.container}>
      <Header />
      {gameStarted ? (
        <GameBoard />
      ) : (
        <View style={styles.wrapper}>
          <Text style={styles.welcome}>Welcome to the game!</Text>
          <TouchableOpacity onPress={() => setGameStarted(true)}>
            <Text style={styles.instructions}>Touch here to start</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
