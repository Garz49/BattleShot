import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Alert, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors'
import  Column  from './column'
import  ColumnNumber  from './columnNumber'

const Grid = ({navigation}) => {

  const buttonAlert = () =>
    Alert.alert('All data will be lost !', 'Do you want to leave the game ?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: () => navigation.navigate('HomePage')},
    ]);

    const windowWidth = Dimensions.get('window').width;
    console.log({windowWidth})
    const sizeSquare = (windowWidth-10)/11;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.title}>
        <Image
          source={require('../assets/img/title.png')}
          style={styles.titleImage}
        />
      </View>
      <View style={styles.gridContainer}>
        <View style={styles.grid}>
          <ColumnNumber
            column=''
            sizeSquare={sizeSquare}
          />
          <Column
            column='A'
            sizeSquare={sizeSquare}
          />
          <Column
            column='B'
            sizeSquare={sizeSquare}
          />
          <Column
            column='C'
            sizeSquare={sizeSquare}
          />
          <Column
            column='D'
            sizeSquare={sizeSquare}
          />
          <Column
            column='E'
            sizeSquare={sizeSquare}
          />
          <Column
            column='F'
            sizeSquare={sizeSquare}
          />
          <Column
            column='G'
            sizeSquare={sizeSquare}
          />
          <Column
            column='H'
            sizeSquare={sizeSquare}
          />
          <Column
            column='I'
            sizeSquare={sizeSquare}
          />
          <Column
            column='J'
            sizeSquare={sizeSquare}
          />
        </View>
        <View style={styles.exitButton}>
          <RoundedButton 
              size={60} 
              title="Exit"
              onPress={buttonAlert}
            />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flex: 7,
    backgroundColor: colors.PrimaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
  },
  titleImage: {
    width: 200,
    height: 100, 
    resizeMode: 'contain'
  },
  gridContainer: {
    flex: 5,
    padding: 20,
    margin: 10,
    marginRight: 20
  },
  grid: {
    flexDirection: 'row',
  },
  exitButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Grid;
