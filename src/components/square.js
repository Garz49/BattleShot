import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
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
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size, color, borderLen) => ({
    square: {
      width: size,
      height: size,
      borderWidth: borderLen,
      borderColor: colors.white,
      backgroundColor: color,
      AlignItems: 'center',
      justifyContent: 'center',
    },
    text: { 
      color: colors.white, 
      fontSize: size / 2, 
      textAlign: 'center',
    },
  }); 