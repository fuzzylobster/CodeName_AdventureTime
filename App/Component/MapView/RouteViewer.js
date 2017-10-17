import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,

} from "native-base";

import FooterNav from "../Footer";
import MapViewer from "./MapViewer";
import styles from "./../Styles/HomeScreenStyle";

export default class RouteViewer extends Component {
  render() {
    // const { navigate } = this.props.navigation;
    // const change = {  location: this.props.set_location, gps: this.props.set_gps_marker, stop: this.props.set_waypoint }
    // const info = {route: this.props.route, waypoint: this.props.waypoint, loc: this.props.loc, gps: this.props.gps}
    return (
      <View style={styles.container}>
        <MapViewer
          changeLocation={this.props.set_location}
          changeGps={this.props.set_gps_marker}
          changeStop={this.props.set_waypoint}
          getLocation={this.props.loc}
          getGps={this.props.gps}
          getStop={this.props.waypoint}
          getRoute={this.props.route}
        />
        <Button
          title="AR View"
          style={{alignSelf: "center" }}
          onPress={() => {

            this.props.navigation.navigate('ARContainer');
          }
          }
        />
      </View>
    );
  }
}
