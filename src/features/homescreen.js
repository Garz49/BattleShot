import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors'

const HomePage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.homeLogo}>
        <Image
          source={require('../assets/img/Ship.png')}
          style={styles.shipImage}
        />
        <Image
          source={require('../assets/img/title.png')}
          style={styles.titleImage}
        />

      </View>
      <View style={styles.homeButton}>
        <RoundedButton 
            size={200} 
            title="Start"
            onPress={() => navigation.navigate('Grid')}  
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PrimaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeLogo: {
    flex: 5,
    marginTop: 5,
  },
  shipImage: {
    width: 350,
    height: 200, 
    resizeMode: 'contain'
  },
  titleImage: {
    width: 350,
    height: 200, 
    resizeMode: 'contain'
  },
  homeButton: {
    flex: 3,
  }
});

export default HomePage;
