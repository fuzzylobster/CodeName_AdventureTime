import React, { Component } from "react";
import {
  Platform,
  Text,
  View,
  Dimensions,
  PermissionsAndroid
} from "react-native";

import styles from "../Styles/MapViewStyle";
import MapView from "react-native-maps";

const { width, height } = Dimensions.get("window");
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.003;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const mapStyle = [
  {
    featureType: "administrative",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified"
      },
      {
        hue: "#0066ff"
      },
      {
        saturation: 74
      },
      {
        lightness: 100
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      },
      {
        weight: 0.6
      },
      {
        saturation: -85
      },
      {
        lightness: 61
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "all",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified"
      },
      {
        color: "#5f94ff"
      },
      {
        lightness: 26
      },
      {
        gamma: 5.86
      }
    ]
  }
];

export default class MapViewer extends Component {
  watchID = null;

  componentWillMount() {
    if (Platform.OS === "android") {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ).then(granted => {
        if (granted) {
          this.watchLocation1();
          this.watchLocation2();
        }
      });
    } else {
      this.watchLocation();
      this.watchLocation2();
    }
  }

  watchLocation1() {
    navigator.geolocation.getCurrentPosition(
      position => {
        var lat = parseFloat(position.coords.latitude);
        var long = parseFloat(position.coords.longitude);

        var initialRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        };
        this.props.setLocation(initialRegion);
        this.props.setGps(initialRegion);
      },
      error => this.watchLocation1(),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 0.0000000000000001
      }
    );
  }

  watchLocation2() {
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        var lat = parseFloat(position.coords.latitude);
        var long = parseFloat(position.coords.longitude);

        var lastRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        };
        this.props.setLocation(lastRegion);
        this.props.setGps(lastRegion);
      },
      error => this.watchLocation2(),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 0.0000000000000001
      }
    );
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
  render() {
    return (
      <MapView
        customMapStyle={mapStyle}
        style={styles.map}
        initialRegion={this.props.location}
      >
        {this.props.markers.map((marker, index) => (
          <MapView.Marker
            key={index}
            coordinate={{
              latitude: marker.lat,
              longitude: marker.lng
            }}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    );
  }
}
