/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Button,
} from 'react-native';

import ProfileHeader from '../Component/ProfileHeader'
import MapViewer from '../Component/MapViewer'
import styles from './Styles/HomeScreenStyle'



export default class HomeScreen extends Component{
  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <View style={styles.container}>
      <Button
        title="Go to Aarons's profile"
        onPress={() =>
          navigate('Profile')
        }
      />
      <Button
        title="Go to MapView"
        onPress={() =>
          navigate('RouteViewer')
        }
      />
  
 


      </View>
    );
  }
}


