import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Image } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid>
        <Row>
          <Text>Greeting</Text>
        </Row>
        <Row>
          <Text>Card Slider</Text>
        </Row>
        <Row>
          <Text>Select Button</Text>
        </Row>
      </Grid>
    );
  }
}