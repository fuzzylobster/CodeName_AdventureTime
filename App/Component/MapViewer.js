import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';

import styles from './Styles/MapViewStyle'
import MapView from 'react-native-maps'

const marker = {
  latlng: {
    latitude: 29.94594699999999,
    longitude:-90.07002319999998
  },
  title: "Operation Spark",
  description: "Code Central"
}


export default class MapViewer extends Component{
    render() {
        const { region } = this.props;
        console.log(region);
    
        return (
          <View style ={styles.container}>
            <MapView
              style={styles.map}
              region={{
                latitude: 29.9459469,
                longitude: -90.070023,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
            <MapView.Marker
      coordinate={marker.latlng}
      title={marker.title}
      description={marker.description}
    />
            </MapView>
          </View>
        );
      }
    }