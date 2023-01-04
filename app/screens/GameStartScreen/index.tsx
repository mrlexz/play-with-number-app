import React, {FC} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import PrimaryButton from '../../components/Button';
import COLORS from '../../../constants/colors';
import Title from '../../components/Title';

const GameStartScreen: FC<{
  onStartGame: (pickNumber: number) => void;
}> = ({onStartGame}) => {
  const [enteredValue, setEnteredValue] = React.useState('');

  const handleInputChange = (text: string) => {
    setEnteredValue(text);
  };

  const resetInputHandler = () => {
    setEnteredValue('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }
    onStartGame(chosenNumber);
  };

  return (
    <ScrollView style={styles.flex1}>
      <KeyboardAvoidingView style={styles.flex1} behavior="position">
        <View style={styles.rootContainer}>
          <Title title="Start a New Game!" />
          <View style={styles.container}>
            <Text style={styles.label}>Enter Number</Text>
            <TextInput
              style={styles.input}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredValue}
              onChangeText={handleInputChange}
            />
            <View style={styles.btnWrapper}>
              <View style={styles.flex1}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.flex1}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Continue
                </PrimaryButton>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default GameStartScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  container: {
    marginTop: 36,
    backgroundColor: COLORS.primary800,
    padding: 16,
    marginHorizontal: 12,
    borderRadius: 8,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: COLORS.accent500,
    borderBottomWidth: 2,
    color: COLORS.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flex1: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    color: COLORS.accent500,
    fontWeight: '500',
    fontFamily: 'OpenSans-Bold',
  },
});
