import { Dimensions } from "react-native";

const { width , height } = Dimensions.get('window')

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const HorizontalScale = (size) => (width/guidelineBaseWidth) * size;
const VerticalScale = (size) => (height/guidelineBaseHeight) * size;
const ModerateScale =(size , factor = 0.5) => size + (HorizontalScale(size) - size) * factor;

export { HorizontalScale , VerticalScale , ModerateScale }