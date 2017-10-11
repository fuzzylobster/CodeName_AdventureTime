import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Modal
} from 'react-native';

import styles from './Styles/ProfilePhotosStyle'


const testList = [{
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


export default class ProfilePhotos extends Component {
  // state = {
  //   modalVisible: false,
  //   modalImage: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/10447708_10105496802291065_3147331436798292945_n.jpg?oh=ff797fce9d955f7447e90ee529022d1c&oe=5A420D4C'
  // }
 
  // setModalVisible(visible, image) {
  //   this.setState({modalVisible: visible});
  //   this.setState({modalImage: image});
  // }
  constructor(props){
    super(props)


  }
  _keyExtractor = (item, index) => item.id;
  _renderItem(item) {
    return (
      <TouchableHighlight onPress={() => {
        this.props.modalChange(true, item.image)
      }}>
      <Image style={styles.item} source={{ uri: item.image }}>
      
      </Image>
      </TouchableHighlight>
    )
  };

  render() {
    return (
      <FlatList
        style={styles.photoBox}
        horizontal
        renderItem={({ item }) => this._renderItem(item)}
        data={testList}

      >
      
    </FlatList>


    )
  }
}
