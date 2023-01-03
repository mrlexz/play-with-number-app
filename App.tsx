/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';

import GameStartScreen from './app/screens/GameStartScreen';
import GameScreen from './app/screens/GameScreen';
import GameOverScreen from './app/screens/GameOverScreen';

const App = () => {
  const [selectedNumber, setSelectedNumber] = React.useState<number | null>();
  const [isGameOver, setIsGameOver] = React.useState(true);
  const [round, setRound] = React.useState(0);

  const handleStartGame = (pickNumber: number) => {
    setSelectedNumber(pickNumber);
    setIsGameOver(false);
  };

  const handleOverGame = (numberOfRound: number) => {
    setIsGameOver(true);
    setRound(numberOfRound);
  };

  const handleRestartGame = () => {
    setIsGameOver(false);
    setSelectedNumber(null);
    setRound(0);
  };

  let screen = <GameStartScreen onStartGame={handleStartGame} />;

  if (selectedNumber) {
    screen = (
      <GameScreen numberChoice={selectedNumber} onGameOver={handleOverGame} />
    );
  }

  if (isGameOver && selectedNumber) {
    screen = (
      <GameOverScreen
        numberGuess={selectedNumber}
        numberRound={round}
        onRestartGame={handleRestartGame}
      />
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('./assets/images/background.png')}
        style={styles.container}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});

export default App;
