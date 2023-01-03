import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../../../../constants/colors';

const NumberRandomContainer: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberRandomContainer;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: COLORS.accent500,
    margin: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    color: COLORS.accent500,
  },
});
