import {StyleSheet} from 'react-native';
import {Dimensions} from '../../styles';

export const styles = StyleSheet.create({
  flexer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputField: {
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    marginHorizontal: 10,
  },
  inputLabel: {
    padding: 10,
    borderRightWidth: 2,
    borderRightColor: '#ccc',
    width: Dimensions.SCREEN_WIDTH * 0.21,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
