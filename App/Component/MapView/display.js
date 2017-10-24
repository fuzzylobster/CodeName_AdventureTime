import React, { Component } from "react";
import {
  View,
  Image,
  Button,
  Text,
  PermissionsAndroid,
  Platform,
  Dimensions
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SocialIcon } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
import MapViewer from "./MapViewer";
import MapView from "react-native-maps";
import styles from "./../Styles/MapViewStyle";
import Polyline from "@mapbox/polyline";

const { width, height } = Dimensions.get("window");
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.003;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const test = {};
export default class display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: []
    };
  }

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
        this.props.set_location(initialRegion);
        this.props.set_gps_marker(initialRegion);
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
        this.props.set_location(lastRegion);
        this.props.set_gps_marker(lastRegion);
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

  componentDidMount() {
    // find your origin and destination point coordinates and pass it to our method.
    // I am using Bursa,TR -> Istanbul,TR for this example
    this.getDirections(
      `"${this.props.markers[0].lat}, ${this.props.markers[0].lng}"`,
      `"${this.props.markers[1].lat}, ${this.props.markers[1].lng}"`
    );
  }

  async getDirections(startLoc, destinationLoc) {
    try {
      let resp = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}`
      );
      let respJson = await resp.json();
      let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
      let coords = points.map((point, index) => {
        return {
          latitude: point[0],
          longitude: point[1]
        };
      });
      this.setState({ coords: coords });
      return coords;
    } catch (error) {
      alert(error);
      return error;
    }
  }

 render() {
    const initialRegion = {
      latitude: this.props.loc.latitude,
      longitude: this.props.loc.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: LONGITUDE_DELTA
    };
    return (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={initialRegion}>
            <MapView.Marker
              coordinate={{
                latitude: this.props.loc.latitude,
                longitude: this.props.loc.longitude
              }}
              title={"This is us"}
              
            />
          
           <MapView.Marker coordinate={{
             latitude: this.props.waypoint.location.lat,
             longitude: this.props.waypoint.location.lng
             
             }} >
            <MapView.Callout
              title="anything"
              onPress={() => {
                   
                  let badgeName = this.props.waypoint.name
                  this.props.navigation.navigate('ARContainer', {
                    refresh: () => {
                      this.setState({coords: []})
                      this.getDirections(
                        `"${this.props.loc.latitude}, ${this.props.loc.longitude}"`,
                        `"${this.props.waypoint.location.lat}, ${this.props.waypoint.location.lng}"`);
                        this.render();
                    }
                  })
                
              }
              }
            /> 
            
          </MapView.Marker>
          <MapView.Polyline
            coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor="red"
          />
        </MapView>
      </View>
    );
  }
}
// <MapViewer
// changeLocation={this.props.set_location}
// changeGps={this.props.set_gps_marker}
// changeStop={this.props.set_waypoint}
// getLocation={this.props.loc}
// getGps={this.props.gps}
// getStop={this.props.waypoint}
// getRoute={this.props.route}
// markers={this.props.markers}
// />

// <MapView style={styles.map} region={this.initialRegion}>
//         {this.props.markers.map((marker, index) => (
//           <MapView.Marker
//             key={index}
//             coordinate={{
//               latitude: marker.lat,
//               longitude: marker.lng
//             }}
//             title={marker.title}
//             description={marker.description}
//           />
//         ))}
//       </MapView>
