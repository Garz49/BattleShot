import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native';

import { Square } from '../components/square';
import { colors } from '../utils/colors'

const Row = ({
    column = {},
  })  => {

  const initialState = Array.from({ length: 10 }, () => 'transparent');
  const [state, setState] = useState(initialState);

  // Pour accéder à une variable d'état dynamique
  const line = column;
  const index = parseInt(line) - 1;
  const current = state[index];

// Pour mettre à jour une variable d'état dynamique
  const updateState = (index, value) => {
    setState((prevState) => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
  };

  // Utilisation de la fonction pour mettre à jour une variable d'état dynamique
  const indexToUpdate = 1;
  updateState(indexToUpdate, 'nouvelle valeur');

  const onPressSquare = (indexToUpdate) => {
    switch(state[indexToUpdate])
    {
      case 'transparent':
        updateState(indexToUpdate, colors.SecondaryBlue);
        break;
      
        case colors.SecondaryBlue:
        updateState(indexToUpdate, colors.SecondaryPurple);
        break;

        case colors.SecondaryPurple:
        updateState(indexToUpdate, 'transparent');
        break;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.rowContainer}>
        <View style={styles.caseLetter}>
          <Text style={styles.letter}>{column}</Text>
        </View>
        <Square
        size={35}
        borderLen={1}
        color={state}
        onPress={() => onPressSquare(1)}
        />
        <Square
        size={35}
        borderLen={1}
        color={state}
        onPress={() => onPressSquare(2)}
        />
        <Square
        size={35}
        borderLen={1}
        color={state}
        onPress={() => onPressSquare(3)}
        />
        <Square
        size={35}
        borderLen={1}
        color={state}
        onPress={() => onPressSquare(4)}
        />
        <Square
        size={35}
        borderLen={1}
        color={state}
        onPress={() => onPressSquare(5)}
        />
        <Square
        size={35}
        borderLen={1}
        color={state}
        onPress={() => onPressSquare(6)}
        />
        <Square
        size={35}
        borderLen={1}
        color={state}
        onPress={() => onPressSquare(7)}
        />
        <Square
        size={35}
        borderLen={1}
        color={state}
        onPress={() => onPressSquare(8)}
        />
        <Square
        size={35}
        borderLen={1}
        color={state}
        onPress={() => onPressSquare(9)}
        />
        <Square
        size={35}
        borderLen={1}
        color={state}
        onPress={() => onPressSquare(10)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.PrimaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
  },
  caseLetter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    color: colors.white
  }
});

export default Row;
