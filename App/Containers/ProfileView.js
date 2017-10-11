import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  Modal
} from 'react-native';
import ProfileHeader from '../Component/ProfileHeader'
import ProfileBadges from '../Component/ProfileBadges'
import ProfilePastAdv from '../Component/ProfilePastAdv'
import ProfilePhotos from '../Component/ProfilePhotos'
import ProfileUserPhoto from '../Component/ProfileUserPhoto'
import styles from './Styles/ProfileViewStyle'


export default class ProfileView extends Component{
    state = {
        modalVisible: false,
        modalImage: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/10447708_10105496802291065_3147331436798292945_n.jpg?oh=ff797fce9d955f7447e90ee529022d1c&oe=5A420D4C'
      }
     
      setModalVisible(visible, image) {
        this.setState({modalVisible: visible});
        this.setState({modalImage: image});
      }
    
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Modal
      transparent
      style={styles.modal}
      animationType="fade"
      visible={this.state.modalVisible}
      onRequestClose={() => {}}
      >
     <View style={styles.modal}>
      <Text style={styles.text} onPress={() => {this.setState({modalVisible: false})}}>Close</Text>
      <Image  style={styles.image} source={{ uri: this.state.modalImage }} resizeMode="contain"/>
     </View>
    </Modal>
        <ProfileHeader/>
        <ProfileBadges/>
         <ProfilePhotos modalChange={this.setModalVisible.bind(this)}/>
        {/*<ProfilePastAdv/> */}
      </View>
    );
  }
}

