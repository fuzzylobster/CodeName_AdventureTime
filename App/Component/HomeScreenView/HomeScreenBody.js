import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { Button, Card, DeckSwiper, Body, CardItem } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid>
        <Row style={styles.greetingRow}>
          <Text style={styles.greetingText}>Welcome, {this.props.user.name}!</Text>
        </Row>
        <Row>
          <Card>
            <CardItem>
              <Text>Card Slider</Text>
            </CardItem>
          </Card>
        </Row>
        <Row style={styles.select}>
          <Button style={styles.selectButton}>
            <Text style={styles.selectText}>I like this one!</Text>
          </Button>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  greetingRow: {
    justifyContent: 'space-around'
  },
  greetingText: {
    fontSize: 25
  },
  select: {
    justifyContent: 'space-around'
  },
  selectButton: {
    padding: 10
  },
  selectText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});