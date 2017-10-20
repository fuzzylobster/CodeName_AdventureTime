import { StyleSheet, Dimensions } from "react-native";
//import { Metrics, ApplicationStyles } from '../../Themes/'
const windowWidth = Dimensions.get("window").width;
const gutter = 16;
export const containerPadding = gutter * -2.25;
export const swiperWidth = windowWidth - gutter * 4;

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    overflow: "visible"
  },
  swiper: {
    overflow: "visible"
  },
  slide: {
    flex: 1,
    position: "relative",
    width: windowWidth,
    // backgroundColor: "#9DD6EB",
    alignSelf: "stretch",
    justifyContent: "center"
  },

  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center"
  }
});
