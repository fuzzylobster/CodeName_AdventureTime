import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Header } from 'native-base';
import Swiper from 'react-native-swiper';
import styles from './Styles/ProfilePastAdvStyle'
import CardImage from './CardImage'

export default class ProfilePastAdv extends Component {
  render() {
    return (
     
      <Swiper style={styles.wrapper} >
        <View style={styles.slide}>
          <CardImage />
        </View>
        <View style={styles.slide}>
        <CardImage />
        </View>
        <View style={styles.slide}>
        <CardImage />
        </View>
      </Swiper>
     
    )
  }
}
