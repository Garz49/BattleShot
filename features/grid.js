import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native';

import { Square } from '../components/square';
import { colors } from '../utils/colors'
import  Row  from '../features/row'

const Grid = () => {

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
          <Row
            column='A'
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
  }
});

export default Grid;
