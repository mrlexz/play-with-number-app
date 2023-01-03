import React, {FC} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import COLORS from '../../../constants/colors';

const Title: FC<
  {
    title: string;
  } & TextProps
> = ({title, style}) => {
  return (
    <Text style={StyleSheet.flatten([styles.textStyle, style])}>{title}</Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
    color: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.white,
    padding: 8,
    textAlign: 'center',
    borderRadius: 4,
  },
});
