import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Button,
} from 'react-native';
import FooterMenu from '../Component/Footer'
import styles from './Styles/HomeScreenStyle'



export default class HomeScreen extends Component{
  render() {
    const { navigate } = this.props.navigation;
    return (
     

     
      <View style={styles.container}>
     

    <Button onPress={() =>
          navigate('Profile')
         
        }  title={this.props.user.name}>
       
        </Button>

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


