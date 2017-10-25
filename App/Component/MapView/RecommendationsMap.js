import MapView from "react-native-maps";
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import {
  Container,
  Header,
  Card,
  CardItem,
  Thumbnail,
  Icon,
  Content,
  Form,
  FooterTab,
  Item,
  Input,
  Label,
  Left,
  Right,
  Body,
  Image,
  Footer,
  Spinner
} from "native-base";
import styles from "./styles";
import Recommendation from "./Recommendation";
const renderIf = function(condition, content) {
  if (condition) {
    //console.log(this.props.recommendations);
    return content;
  } else {
    console.log(1);
    return null;
  }
};
const photo = marker => {
  const photo = marker.venue.photos.groups[0].items[0];

  return `${photo.prefix}300x500${photo.suffix}`;
};

export default class RecommendationsMap extends Component {
  render() {
    return (
      <MapView.Animated
        region={this.props.mapRegion}
        style={styles.fullscreen}
        onRegionChange={this.props.onRegionChange}
      >
        <MapView.Circle
          center={this.props.mapRegion}
          radius={this.props.gpsAccuracy * 1.5}
          strokeWidth={0.5}
          strokeColor="rgba(66, 180, 230, 1)"
          fillColor="rgba(66, 180, 230, 0.2)"
        />

        <MapView.Circle
          center={this.props.mapRegion}
          radius={5}
          strokeWidth={0.5}
          strokeColor="rgba(66, 180, 230, 1)"
          fillColor="rgba(66, 180, 230, 1)"
        />

        {renderIf(
          this.props.recommendations,
          this.props.recommendations.map((marker, index) => (
            <MapView.Marker
              key={index}
              coordinate={{
                latitude: marker.venue.location.lat,
                longitude: marker.venue.location.lng
              }}
            />
          ))
        )}
      </MapView.Animated>
    );
  }
}

//export default RecommendationsMap;
