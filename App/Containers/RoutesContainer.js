import { connect } from 'react-redux'
import {Current_adventure, Current_location, Current_Stop} from '../redux/actions'
import RouteViewer from '../ComponentViews/RouteViewer'




const mapStateToProps = (state) => {
    return {route: state.people.adventure, loc: state.people.location, waypoint: state.people.CurrentStop}
    
  }
  
  const mapDispatchToProps = dispatch => {
        return {
            set_location: (loc)  => {
              dispatch(Current_location(loc))
            },

            set_waypoint: (loc)  => {
                dispatch(Current_location(loc))
              },

              set_Adventure: (loc)  => {
                dispatch(Current_adventure(loc))
              }
          }
          
       
      
    
    }
  
  
  const RoutesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(RoutesViewer)
  
  export default RoutesContainer