import React, {FC} from 'react';
import {View, StyleSheet, Image, Text, useWindowDimensions} from 'react-native';
import Title from '../../components/Title';
import COLORS from '../../../constants/colors';
import PrimaryButton from '../../components/Button';

const GameOverScreen: FC<{
  numberRound: number;
  numberGuess: number;
  onRestartGame: () => void;
}> = ({numberRound = 1, numberGuess = 2, onRestartGame}) => {
  const {width, height} = useWindowDimensions();
  const imageSize = width < 380 ? 150 : height < 400 ? 80 : 300;

  const imgStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <View style={styles.container}>
      <Title title="Game Over" />
      <View style={[styles.imgContainer, imgStyle]}>
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
