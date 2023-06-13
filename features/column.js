import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native';

import { Square } from '../components/square';
import { colors } from '../utils/colors'

const Column = ({
    column = {},
  })  => {


  const indexMap = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
    'E': 4,
    'F': 5,
    'G': 6,
    'H': 7,
    'I': 8,
    'J': 9,
  };
  
  const index = indexMap[column];
      
  const initialState = Array.from({ length: 10 }, () => 'transparent');
  const [state, setState] = useState(initialState);

  // Utilisation de la fonction pour mettre à jour une variable d'état dynamique

  const onPressSquare = (indexToUpdate) => {
    setState((prevState) => {
      const newState = [...prevState];
      const currentValue = newState[indexToUpdate];
  
      switch (currentValue) {
        case 'transparent':
          newState[indexToUpdate] = colors.SecondaryBlue;
          break;
  
        case colors.SecondaryBlue:
          newState[indexToUpdate] = colors.SecondaryPurple;
          break;
  
        case colors.SecondaryPurple:
          newState[indexToUpdate] = 'transparent';
          break;
  
        default:
          break;
      }
  
      return newState;
    });
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.columnContainer}>
        <View style={styles.caseLetter}>
          <Text style={styles.letter}>{column}</Text>
        </View>
        <Square
        size={35}
        borderLen={1}
        color={state[1]}
        onPress={() => onPressSquare(1)}
        />
        <Square
        size={35}
        borderLen={1}
        color={state[2]}
        onPress={() => onPressSquare(2)}
        />
        <Square
        size={35}
        borderLen={1}
        color={state[3]}
        onPress={() => onPressSquare(3)}
        />
        <Square
        size={35}
        borderLen={1}
        color={state[4]}
        onPress={() => onPressSquare(4)}
        />
        <Square
        size={35}
        borderLen={1}
        color={state[5]}
        onPress={() => onPressSquare(5)}
        />
        <Square
        size={35}
        borderLen={1}
        color={state[6]}
        onPress={() => onPressSquare(6)}
        />
        <Square
        size={35}
        borderLen={1}
        color={state[7]}
        onPress={() => onPressSquare(7)}
        />
        <Square
        size={35}
        borderLen={1}
        color={state[8]}
        onPress={() => onPressSquare(8)}
        />
        <Square
        size={35}
        borderLen={1}
        color={state[9]}
        onPress={() => onPressSquare(9)}
        />
        <Square
        size={35}
        borderLen={1}
        color={state[10]}
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

export default Column;
