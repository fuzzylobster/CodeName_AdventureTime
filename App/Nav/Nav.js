import { StackNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import LoginScreen from '../Containers/LoginScreen'
import Profile from '../Containers/ProfileView'
import RouteViewer from '../Containers/RouteViewer'
import styles from './Styles/NavStyle'

// Manifest of possible screens
export const Nav = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  RouteViewer: { screen: RouteViewer },
  LoginScreen: { screen: LoginScreen },
  Profile: { screen: Profile }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})
export default Nav

