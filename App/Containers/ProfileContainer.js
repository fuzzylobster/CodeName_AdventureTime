import { connect } from 'react-redux'
import ProfileView from '../ComponentViews/ProfileView'




const mapStateToProps = (state) => {
    return {user: state.people.user}
    
  }
  
  const mapDispatchToProps = dispatch => {
    return {}
    
    }
  
  
  const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfileView)
  
  export default ProfileContainer