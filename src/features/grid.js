import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Image, Alert } from 'react-native';

import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors'
import  Column  from './column'

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
          <Column
            column='A'
          />
          <Column
            column='B'
          />
          <Column
            column='C'
          />
          <Column
            column='D'
          />
          <Column
            column='E'
          />
          <Column
            column='F'
          />
          <Column
            column='G'
          />
          <Column
            column='H'
          />
          <Column
            column='I'
          />
          <Column
            column='J'
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
