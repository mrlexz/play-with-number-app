import React, {FC, useEffect} from 'react';
import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import Title from '../../components/Title';
import COLORS from '../../../constants/colors';
import NumberRandomContainer from './components/NumberRandomContainer';
import PrimaryButton from '../../components/Button';

const gennerateRandomNumber = (
  min: number,
  max: number,
  exclude: number,
): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return gennerateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
};

let maxNumber = 100;
let minNumber = 1;

const GameScreen: FC<{
  numberChoice: number;
  onGameOver: (numberOfRound: number) => void;
}> = ({numberChoice, onGameOver}) => {
  const [currentGuess, setCurrentGuess] = React.useState(() => {
    return gennerateRandomNumber(1, 100, numberChoice);
  });

  const [guessRound, setGuessRound] = React.useState<number[]>([]);

  useEffect(() => {
    if (currentGuess === numberChoice) {
      onGameOver(guessRound.length);
    }
  }, [currentGuess, guessRound.length, numberChoice, onGameOver]);

  useEffect(() => {
    maxNumber = 100;
    minNumber = 1;
  }, []);

  const handleNextGuess = (direction: 'lower' | 'greater') => {
    if (
      (direction === 'lower' && currentGuess < numberChoice) ||
      (direction === 'greater' && currentGuess > numberChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess;
    }
    const nextNumber = gennerateRandomNumber(
      minNumber,
      maxNumber,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setGuessRound(currentRound => [nextNumber, ...currentRound]);
  };

  const renderItem = ({item, index}: {item: number; index: number}) => {
    return (
      <View style={styles.itemWrapper}>
        <Text style={styles.textItem}> #{guessRound.length - index}</Text>
        <Text style={styles.textItem}> Your guessed: {item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Title title="Opponent Guess" />
      <NumberRandomContainer>{currentGuess}</NumberRandomContainer>
      <View style={styles.btnWrapper}>
        <View style={styles.flex1}>
          <PrimaryButton onPress={() => handleNextGuess('greater')}>
            +
          </PrimaryButton>
        </View>
        <View style={styles.flex1}>
          <PrimaryButton onPress={() => handleNextGuess('lower')}>
            -
          </PrimaryButton>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRound}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.primary800,
  },
  flex1: {
    flex: 1,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    marginTop: 24,
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 4,
    borderWidth: 1,
    borderColor: COLORS.primary500,
    padding: 8,
    borderRadius: 8,
  },
  textItem: {
    fontSize: 20,
    color: COLORS.accent500,
    fontFamily: 'OpenSans-Regular',
  },
});
