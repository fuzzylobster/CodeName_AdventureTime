import { connect } from "react-redux";
import ProfileView from "../ComponentViews/ProfileView";

const mapStateToProps = state => {
  return {
    user: state.people.user,
    photos: state.people.photos,
    adventures: state.people.pastAdventures,
    stockPhotos: state.people.stockPhotos
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(
  ProfileView
);

export default ProfileContainer;
