import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';
import {Typography} from '../../styles';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.WHITE,
  },
  title: {
    backgroundColor: Colors.SECONDARY,
    padding: 10,
  },
  heading: {
    textAlign: 'center',
    ...Typography.subTitle,
  },
});
