import { StyleSheet, Dimensions } from "react-native";
//import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: "#FFECEC"
  },
  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: "#FFECEC"
  },
  image: {
    flex: 1,
    alignSelf: "stretch"
  },
  text: {
    color: "#ffffff",
    alignSelf: "flex-end"
  },
  header: {
    fontSize: 25,
    color: "#acc878",
    fontWeight: "bold",
    textShadowColor: "#000000",
    textShadowOffset: {width: 1, height: 1},
    backgroundColor: "#6CBCBC"
  },
  topHeader: {
    fontSize: 25,
    color: "#FFFFFF",
    fontWeight: "bold",
    textShadowColor: "#000000",
    textShadowOffset: {width: 1, height: 1},
    backgroundColor: "#9E2626"
  },
  profHeader: {
    backgroundColor: "#9E2626",
    color: "#FFFFFF"
  },
  photoContainer: {
    alignItems: "center"
  },
  badges: {},
  photos: {},
  pastAdv: {}
});
