import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native';

import { Square } from '../components/square';
import { colors } from '../utils/colors'

const Row = ({
    line = 'A',
  })  => {

  const [currentA1, setCurrentA1] = useState(colors.white);
  const [currentA2, setCurrentA2] = useState(colors.white);
  const [currentA3, setCurrentA3] = useState(colors.white);
  const [currentA4, setCurrentA4] = useState(colors.white);
  const [currentA5, setCurrentA5] = useState(colors.white);
  const [currentA6, setCurrentA6] = useState(colors.white);
  const [currentA7, setCurrentA7] = useState(colors.white);
  const [currentA8, setCurrentA8] = useState(colors.white);
  const [currentA9, setCurrentA9] = useState(colors.white);
  const [currentA10, setCurrentA10] = useState(colors.white);

  const onPressSquare = () => {
    switch(currentA1)
    {
      case colors.white:
        setCurrentA1(colors.SecondaryBlue);
        break;
      
        case colors.SecondaryBlue:
        setCurrentA1(colors.SecondaryPurple);
        break;

        case colors.SecondaryPurple:
        setCurrentA1(colors.white);
        break;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.rowContainer}>
        <Text>A</Text>
        <Square
        size={35}
        borderLen={1}
        color={currentA1}
        onPress={onPressSquare}
        />
        <Square
        size={35}
        borderLen={1}
        color={currentA2}
        onPress={onPressSquare}
        />
        <Square
        size={35}
        borderLen={1}
        color={currentA3}
        onPress={onPressSquare}
        />
        <Square
        size={35}
        borderLen={1}
        color={currentA4}
        onPress={onPressSquare}
        />
        <Square
        size={35}
        borderLen={1}
        color={currentA5}
        onPress={onPressSquare}
        />
        <Square
        size={35}
        borderLen={1}
        color={currentA6}
        onPress={onPressSquare}
        />
        <Square
        size={35}
        borderLen={1}
        color={currentA7}
        onPress={onPressSquare}
        />
        <Square
        size={35}
        borderLen={1}
        color={currentA8}
        onPress={onPressSquare}
        />
        <Square
        size={35}
        borderLen={1}
        color={currentA9}
        onPress={onPressSquare}
        />
        <Square
        size={35}
        borderLen={1}
        color={currentA10}
        onPress={onPressSquare}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.PrimaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flex: 1,
    padding: 20,
    margin: 10,
  },
});

export default Row;
