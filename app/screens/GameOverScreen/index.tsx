import React, {FC} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Title from '../../components/Title';
import COLORS from '../../../constants/colors';
import PrimaryButton from '../../components/Button';

const GameOverScreen: FC<{
  numberRound: number;
  numberGuess: number;
  onRestartGame: () => void;
}> = ({numberRound = 1, numberGuess = 2, onRestartGame}) => {
  return (
    <View style={styles.container}>
      <Title title="Game Over" />
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../../../assets/images/success.png')}
        />
      </View>
      <Text style={styles.desc}>
        You needed <Text style={styles.highlight}>{numberRound}</Text> rounds to
        guess the number <Text style={styles.highlight}>{numberGuess}</Text>.{' '}
      </Text>
      <PrimaryButton onPress={onRestartGame}>Restart New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: COLORS.white,
    overflow: 'hidden',
    margin: 30,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  desc: {
    fontSize: 24,
    fontFamily: 'OpenSans-Regular',
    color: COLORS.primary800,
    textAlign: 'center',
    marginBottom: 12,
  },
  highlight: {
    fontFamily: 'OpenSans-Bold',
  },
});
