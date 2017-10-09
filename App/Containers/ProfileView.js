import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';
import ProfileHeader from '../Component/ProfileHeader'
import ProfileBadges from '../Component/ProfileBadges'
import ProfilePastAdv from '../Component/ProfilePastAdv'
import ProfilePhotos from '../Component/ProfilePhotos'
import ProfileUserPhoto from '../Component/ProfileUserPhoto'
import styles from './Styles/ProfileViewStyle'


export default class ProfileView extends Component{
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ProfileHeader/>
      </View>
    );
  }
}

