import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import FooterNav from "../Footer";
import MapViewer from "./MapViewer";
import PlaceSearch from "./PlaceSearch";
import styles from "./../Styles/HomeScreenStyle";

export default class RouteViewer extends Component {
  state = {
    tempAdventure: {
      name: "tempAdventure",
      markerLocations: [],
      cities: [],
      miles: 0
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    const change = {
      location: this.props.set_location,
      gps: this.props.set_gps_marker,
      stop: this.props.set_waypoint
    };
    const info = {
      route: this.props.route,
      waypoint: this.props.waypoint,
      loc: this.props.loc,
      gps: this.props.gps
    };
    return (
      <MapViewer
        setLocation={this.props.set_location}
        setGps={this.props.set_gps_marker}
        gps={this.props.gps}
        loc={this.props.loc}
        markers={this.state.tempAdventure.markerLocations}
        mapRecommendations={this.props.mapRecommendations}
        set_recommendations={this.props.set_recommendations}
      />
    );
  }
}

// <PlaceSearch
// setMarker={this.props.add_marker}
// markers={this.props.markers}
// navigation={this.props.navigation}
// setLocation={this.props.set_location}
// setGps={this.props.set_gps_marker}
// gps={this.props.gps}
// loc={this.props.loc}
// />
//

// <MapViewer
// setLocation={this.props.set_location}
// setGps={this.props.set_gps_marker}
// gps={this.props.gps}
// loc={this.props.loc}
// />
