import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  Modal
} from 'react-native';

import { Container, Header, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Orientation from 'react-native-orientation';
import FooterMenu from '../Component/Footer'
import ProfileHeader from '../Component/ProfileHeader'
import ProfileBadges from '../Component/ProfileBadges'
import ProfilePastAdv from '../Component/ProfilePastAdv'
import ProfilePhotos from '../Component/ProfilePhotos'
import ProfileUserPhoto from '../Component/ProfileUserPhoto'
import styles from './Styles/ProfileViewStyle'


export default class ProfileView extends Component {
  constructor(props) {
    super(props)


  }


  state = {
    modalVisible: false,
    modalImage: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/10447708_10105496802291065_3147331436798292945_n.jpg?oh=ff797fce9d955f7447e90ee529022d1c&oe=5A420D4C'
  }
  testList = [{
    key: 1,
    name: 'Aaron',
    image: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/10447708_10105496802291065_3147331436798292945_n.jpg?oh=ff797fce9d955f7447e90ee529022d1c&oe=5A420D4C'
  }, {
    key: 2,
    name: 'Aaron',
    image: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/14045538_10107972595032565_3593452153664586935_n.jpg?oh=26a4a7c5994a20fd4925ca44e652e600&oe=5A3CDA8F'
  }, {
    key: 3,
    name: 'Aaron',
    image: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/484184_10101925915846125_2117390075_n.jpg?oh=1ac9e874e9aff45162e1bd57260a87cf&oe=5A45C8EC'
  }, {
    key: 4,
    name: 'Aaron',
    image: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/296567_10100920967635395_1566287574_n.jpg?oh=3e4662df3e0e036d7e1ebdcc9db45261&oe=5A3BB0FA'
  }, {
    key: 5,
    name: 'Aaron',
    image: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/14731191_10108307608712465_7841494444542832586_n.jpg?oh=77c6f8ef56268c76513122da90a08dea&oe=5A3D0BD0'
  }, {
    key: 6,
    name: 'Aaron',
    image: 'https://scontent-dft4-2.xx.fbcdn.net/v/t31.0-8/14615633_10108262526203175_477664095445974644_o.jpg?oh=41cf6b197db119373a5b24857570dff0&oe=5A4351F2'
  }, {
    key: 7,
    name: 'Aaron',
    image: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/427047_10101508273454825_674224487_n.jpg?oh=a1dba32d1618546b454ce15a2171398c&oe=5A3D827C'
  }, {
    key: 7,
    name: 'Aaron',
    image: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/1917802_975240228725_1539824_n.jpg?oh=c3aa630e16c3ffa864c81c2cd7ba1e0f&oe=5A73866B'
  },
  ]

  setModalVisible(visible, image) {
    this.setState({ modalVisible: visible });
    this.setState({ modalImage: image });
  }
  closeModal() {
    this.setState({ modalVisible: false })
  }


  render() {
    const { navigate } = this.props.navigation;
    return (

      <Grid>
        <Modal
          transparent
          style={styles.modal}
          animationType="fade"
          visible={this.state.modalVisible}
          onRequestClose={() => { }}>
          <View style={styles.modal}>
            <Image style={styles.image} source={{ uri: this.state.modalImage }} resizeMode="contain" />
            <Text style={styles.text} onPress={() => { this.closeModal() }}>Close</Text>
          </View>
        </Modal>
        <Row size={43}>
          <View style={styles.container}>
            <ProfileHeader />
            <ProfileBadges />
          </View>
        </Row>
        <Row size={15}>
          <View>
            <ProfilePhotos modalChange={this.setModalVisible.bind(this)} photos={this.testList} />
          </View>
        </Row>
        <Row size={42}>
          <ProfilePastAdv photos={this.testList} />
        </Row>
      </Grid>






    );
  }
}

