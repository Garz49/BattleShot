import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export const Square = ({
  style = {},
  textStyle = {},
  size = 125,
  borderLen = 1,
  color = 'transparent',
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size, color, borderLen).square, style]} onPress={props.onPress}>
    </TouchableOpacity>
  );
};

const styles = (size, color, borderLen) => ({
    square: {
      width: size,
      height: size,
      borderWidth: borderLen,
      borderColor: colors.white,
      backgroundColor: color
    },
  }); 