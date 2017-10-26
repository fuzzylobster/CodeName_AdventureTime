import { connect } from "react-redux";
import {
  Current_adventure,
  Current_location,
  Current_Stop,
  Gps_Marker,
  Marker_locations,
  Recommendations
} from "../redux/actions";
import RouteViewer from "../Component/MapView/RouteViewer";
import Api from "../Services/Api";

const mapStateToProps = state => {
  return {
    route: state.people.adventure,
    loc: state.people.location,
    waypoint: state.people.CurrentStop,
    gps: state.people.gps,
    markers: state.people.adventure.markerLocations,
    token: state.people.token,
    mapRecommendations: state.people.recommendations,
    user: state.people.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    set_location: loc => {
      dispatch(Current_location(loc));
    },

    set_waypoint: loc => {
      dispatch(Current_Stop(loc));
    },
    set_recommendations: recommendations => {
      dispatch(Recommendations(recommendations));
    },

    set_Adventure: (adventure, toBeSaved, id) => {
      dispatch(Current_adventure(adventure));
      if (toBeSaved) {
        const api = Api.create();
        console.log(id);

        newAdventure = {
          userId: id,
          name: adventure.name,
          locs: adventure.markerLocations
        };

        const api2 = Api.create();

        dispatch(Set_cities(adventure.cities));

        api2.saveCities(adventure.cities);

        api.saveRoute(newAdventure).then(
          success => {
            console.log(success);
          },
          error => {
            console.log(error);
          }
        );
      }
    },

    set_gps_marker: gps => {
      dispatch(Gps_Marker(gps));
    },
    add_marker: gps => {
      dispatch(Marker_locations(gps));
    }
    // Set_cities: cities => {
    //   dispatch(Set_cities(cities));
    // },
  };
};

const RoutesContainer = connect(mapStateToProps, mapDispatchToProps)(
  RouteViewer
);

export default RoutesContainer;
