import { StackNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreenContainer'
import LoginContainer from '../Containers/LoginContainer'
import Profile from '../Containers/ProfileContainer'
import RouteViewer from '../ComponentViews/RouteViewer'
import styles from './Styles/NavStyle'
import { connect } from 'react-redux'
import App from '../Containers/App'

// Manifest of possible screens
export const Nav = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  RouteViewer: { screen: RouteViewer },
  LoginContainer: { screen: LoginContainer },
  Profile: { screen: Profile }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginContainer',
  navigationOptions: {
    headerStyle: styles.header
  }
})



export default Nav







