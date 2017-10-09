import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Image
} from 'react-native';

import styles from './Styles/ProfileHeaderStyle'


export default class ProfileHeader extends Component{
  render() {
    return (
       
      <Image style={styles.headerBackground} source={require('../Images/Webp.net-resizeimage.png')}>
        <View style={styles.header}>
            <View style={styles.profilePicWrap}>
                <Image style={styles.profilePic} source={require('../Images/10447708_10105496802291065_3147331436798292945_n.jpg')}></Image>
            </View>
            <Text style={styles.name}>Aaron Matheney</Text>
            <Text style={styles.pos}>Software Dev</Text>
        </View>
     
      </Image>
        
        
     
    );
  }
}

