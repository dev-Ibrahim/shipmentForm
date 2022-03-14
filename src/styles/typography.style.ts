import {StyleSheet} from 'react-native';
import Colors from './colors.style';
import Dimensions from './dimensions.style';

export default StyleSheet.create({
  title: {
    fontSize: Dimensions.FONT_SIZE_XL,
    fontWeight: '500',
    color: Colors.BLACK,
  },
  subTitle: {
    fontSize: Dimensions.FONT_SIZE_M,
    fontWeight: '800',
    color: Colors.BLACK,
  },
  label: {
    fontSize: Dimensions.FONT_SIZE_L,
    color: Colors.BLACK,
  },
});
