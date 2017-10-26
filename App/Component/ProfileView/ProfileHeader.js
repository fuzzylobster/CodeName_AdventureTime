import React, { Component } from "react";
import { Platform, Text, View, Image } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import ProfileBadges from "./ProfileBadges";

import styles from "./../Styles/ProfileHeaderStyle";

export default class ProfileHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Image
          style={styles.profilePic}
          source={{ uri: this.props.user.picture.data.url }}
          resizeMode={"cover"}
        />


      
      // <Image
      //   style={styles.headerBackground}
      //   source={{ uri: this.props.background }}
      // >
      //   <View style={styles.header}>
      //     <View style={styles.profilePicWrap}>
      //       <Image
      //         style={styles.profilePic}
      //         source={{ uri: this.props.user.picture.data.url }}
      //         resizeMode={"cover"}
      //       />
      //     </View>
      //     <Text style={styles.name}>{this.props.user.name}</Text>
      //     <Text style={styles.pos}> {"Software Dev"}</Text>
      //   </View>
      // </Image>
    );
  }
}
