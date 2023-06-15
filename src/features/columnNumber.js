import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';

import { Square } from '../components/square';
import { colors } from '../utils/colors';


const ColumnNumber = ({
    column = {},
    sizeSquare = 35,
  })  => {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.columnContainer}>
        <View style={styles.caseLetter}>
          <Text style={styles.letter}>{column}</Text>
        </View>
        <Square
        size={sizeSquare}
        borderLen={0}
        title="1"
        onPress={() => {}}
        />
        <Square
        size={sizeSquare}
        borderLen={0}
        title="2"
        onPress={() => {}}
        />
        <Square
        size={sizeSquare}
        borderLen={0}
        title="3"
        onPress={() => {}}
        />
        <Square
        size={sizeSquare}
        borderLen={0}
        title="4"
        onPress={() => {}}
        />
        <Square
        size={sizeSquare}
        borderLen={0}
        title="5"
        onPress={() => {}}
        />
        <Square
        size={sizeSquare}
        borderLen={0}
        title="6"
        onPress={() => {}}
        />
        <Square
        size={sizeSquare}
        borderLen={0}
        title="7"
        onPress={() => {}}
        />
        <Square
        size={sizeSquare}
        borderLen={0}
        title="8"
        onPress={() => {}}
        />
        <Square
        size={sizeSquare}
        borderLen={0}
        title="9"
        onPress={() => {}}
        />
        <Square
        size={sizeSquare}
        borderLen={0}
        title="10"
        onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PrimaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnContainer: {
  },
  caseLetter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    color: colors.white
  }
});

export default ColumnNumber;
