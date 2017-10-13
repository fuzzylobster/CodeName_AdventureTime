import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Button
} from 'react-native';

import ProfileHeader from '../Component/ProfileHeader'
import MapViewer from '../Component/MapViewer'
import styles from './Styles/HomeScreenStyle'



export default class RouteViewer extends Component{
  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <View style={styles.container}>
      <MapViewer/>
  
 


      </View>
    );
  }
}


