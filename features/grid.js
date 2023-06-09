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
            line='A'
          />
          <Row
            line='B'
          />
          <Row
            line='C'
          />
          <Row
            line='D'
          />
          <Row
            line='E'
          />
          <Row
            line='F'
          />
          <Row
            line='G'
          />
          <Row
            line='H'
          />
          <Row
            line='I'
          />
          <Row
            line='J'
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
    width: 350,
    height: 350,
    borderWidth: 2,
    borderColor: colors.white,
    flexDirection: 'row',
  }
});

export default Grid;
