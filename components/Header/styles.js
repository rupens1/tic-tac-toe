import {StyleSheet} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    marginTop: isIphoneX() ? 0 : 20,
    height: isIphoneX() ? 80 : 70,
    backgroundColor: '#8731BC',
    flexDirection: 'row',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    marginTop: isIphoneX() ? 40 : 10,
    lineHeight: isIphoneX() ? 30 : 10,
  },
});
