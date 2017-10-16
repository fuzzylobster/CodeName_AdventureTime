import { connect } from "react-redux";
import { Add_Badge } from "../redux/actions";
import ARScreen from "../Component/ARView/ARScreen";

const mapStateToProps = state => {
  return { 
    currentStop: state.people.CurrentStop
  };
};

const mapDispatchToProps = dispatch => {

  return {
    addBadge: badge => {
      dispatch(Add_Badge(badge));
    }
  };
};

const ARContainer = connect(mapStateToProps, mapDispatchToProps)(
  ARScreen
);

export default ARContainer;