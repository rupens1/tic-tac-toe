/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {useState, useEffect, useCallback} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';

import {Circle, Cross, PromptArea} from '../../components';
import {
  CENTER_POINTS,
  AREAS,
  CONDITIONS,
  GAME_RESULT_NO,
  GAME_RESULT_USER,
  GAME_RESULT_AI,
  GAME_RESULT_TIE,
} from '../../constants/game';
import {styles} from './styles';

export const GameBoard = () => {
  const [AIInputs, setAIInputs] = useState([]);
  const [userInputs, setUserInputs] = useState([]);
  const [result, setResult] = useState(GAME_RESULT_NO);
  const [round, setRound] = useState(0);

  const restart = () => {
    setRound(round + 1);
    setAIInputs([]);
    setUserInputs([]);
    setResult(GAME_RESULT_NO);

    setTimeout(() => {
      if (round % 2 === 0) {
        AIAction();
      }
    }, 5);
  };

  const boardClickHandler = e => {
    const {locationX, locationY} = e.nativeEvent;
    if (result !== -1) {
      return;
    }
    const inputs = userInputs.concat(AIInputs);

    const area = AREAS.find(
      d =>
        locationX >= d.startX &&
        locationX <= d.endX &&
        locationY >= d.startY &&
        locationY <= d.endY,
    );

    if (area && inputs.every(d => d !== area.id)) {
      setUserInputs(userInputs.concat(area.id));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      AIAction();
    }, 5);
  }, [userInputs, AIAction]);

  useEffect(() => {
    judgeWinner();
  }, [judgeWinner, userInputs, AIInputs]);

  const getRandomSpace = useCallback(usedSpaces => {
    const randomNumber = Math.round(Math.random() * 8.3);
    console.log({randomNumber});
    if (usedSpaces.every(d => d !== randomNumber)) {
      return randomNumber;
    }
    return getRandomSpace(usedSpaces);
  }, []);

  const AIAction = useCallback(() => {
    if (result !== -1) {
      return;
    }
    const inputs = userInputs.concat(AIInputs);
    const randomSpace = getRandomSpace(inputs);
    console.log({randomSpace});

    setAIInputs(AIInputs.concat(randomSpace));
  }, [AIInputs, userInputs, getRandomSpace, result]);

  useEffect(() => {
    restart();
  }, []);

  const isWinner = inputs => {
    return CONDITIONS.some(d => d.every(item => inputs.indexOf(item) !== -1));
  };

  const judgeWinner = useCallback(() => {
    const inputs = userInputs.concat(AIInputs);
    console.log({inputs, userInputs, AIInputs});

    if (inputs.length >= 5) {
      let res = isWinner(userInputs);
      if (res && result !== GAME_RESULT_USER) {
        return setResult(GAME_RESULT_USER);
      }
      res = isWinner(AIInputs);
      if (res && result !== GAME_RESULT_AI) {
        return setResult(GAME_RESULT_AI);
      }
    }

    if (
      inputs.length === 9 &&
      result === GAME_RESULT_NO &&
      result !== GAME_RESULT_TIE
    ) {
      setResult(GAME_RESULT_TIE);
    }
  }, [AIInputs, result, userInputs]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={e => boardClickHandler(e)}>
        <View style={styles.board}>
          <View style={styles.line} />
          <View
            style={[
              styles.line,
              {
                width: 3,
                height: 306,
                transform: [{translateX: 200}],
              },
            ]}
          />
          <View
            style={[
              styles.line,
              {
                width: 306,
                height: 3,
                transform: [{translateY: 100}],
              },
            ]}
          />
          <View
            style={[
              styles.line,
              {
                width: 306,
                height: 3,
                transform: [{translateY: 200}],
              },
            ]}
          />
          {userInputs.map((d, i) => (
            <Circle
              key={i}
              xTranslate={CENTER_POINTS[d].x}
              yTranslate={CENTER_POINTS[d].y}
              color="deepskyblue"
            />
          ))}
          {AIInputs.map((d, i) => (
            <Cross
              key={i}
              xTranslate={CENTER_POINTS[d].x}
              yTranslate={CENTER_POINTS[d].y}
            />
          ))}
        </View>
      </TouchableWithoutFeedback>
      <PromptArea result={result} onRestart={() => restart()} />
    </View>
  );
};
