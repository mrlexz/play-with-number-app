import React, {FC} from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';
import COLORS from '../../../constants/colors';

type PrimaryButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
};

const PrimaryButton: FC<PrimaryButtonProps> = ({onPress, children}) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.interContainer, styles.pressed]
            : styles.interContainer
        }
        onPress={onPress}>
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  interContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: COLORS.primary500,
  },
  btnText: {
    color: COLORS.white,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
});
