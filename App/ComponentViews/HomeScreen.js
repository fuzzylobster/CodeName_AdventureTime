import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Button,
  Image
} from 'react-native';
import FooterMenu from '../Component/Footer'
import styles from './Styles/HomeScreenStyle'



export default class HomeScreen extends Component{
  constructor(props) {
    super(props)


  }
  render() {
    return (
      <View >
     <View style={styles.profilePicWrap}>
      <Image style={styles.profilePic} source={{ uri: this.props.user.picture.data.url }}></Image>
  </View>
     

     
      
     

    <Button onPress={() =>
          this.props.navigation.navigate('Profile')
         
        }  title={this.props.user.name}>
       
        </Button>
        <Text>
        {Object.keys(this.props.user)}

        </Text>

      <Button
        title="Go to MapView"
        onPress={() =>
          this.props.navigation.navigate('RouteViewer')
        }
      />
  
 


      
      </View>
    );
  }
}


