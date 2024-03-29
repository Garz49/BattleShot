import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';

import { Square } from '../components/square';
import { colors } from '../utils/colors';

const Column = ({
    column = {},
    sizeSquare = 35,
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
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.columnContainer}>
        <View style={styles.caseLetter}>
          <Text style={styles.letter}>{column}</Text>
        </View>
        <Square
        size={sizeSquare}
        borderLen={1}
        color={state[0]}
        onPress={() => onPressSquare(0)}
        />
        <Square
        size={sizeSquare}
        borderLen={1}
        color={state[1]}
        onPress={() => onPressSquare(1)}
        />
        <Square
        size={sizeSquare}
        borderLen={1}
        color={state[2]}
        onPress={() => onPressSquare(2)}
        />
        <Square
        size={sizeSquare}
        borderLen={1}
        color={state[3]}
        onPress={() => onPressSquare(3)}
        />
        <Square
        size={sizeSquare}
        borderLen={1}
        color={state[4]}
        onPress={() => onPressSquare(4)}
        />
        <Square
        size={sizeSquare}
        borderLen={1}
        color={state[5]}
        onPress={() => onPressSquare(5)}
        />
        <Square
        size={sizeSquare}
        borderLen={1}
        color={state[6]}
        onPress={() => onPressSquare(6)}
        />
        <Square
        size={sizeSquare}
        borderLen={1}
        color={state[7]}
        onPress={() => onPressSquare(7)}
        />
        <Square
        size={sizeSquare}
        borderLen={1}
        color={state[8]}
        onPress={() => onPressSquare(8)}
        />
        <Square
        size={sizeSquare}
        borderLen={1}
        color={state[9]}
        onPress={() => onPressSquare(9)}
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

export default Column;
