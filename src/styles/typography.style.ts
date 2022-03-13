import {StyleSheet} from 'react-native';
// import Color from './colors.style';
import Dimensions from './dimensions.style';

export default StyleSheet.create({
  title: {
    fontSize: Dimensions.FONT_SIZE_XL,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: Dimensions.FONT_SIZE_M,
    fontWeight: '800',
  },
  label: {
    fontSize: Dimensions.FONT_SIZE_L,
  },
});
