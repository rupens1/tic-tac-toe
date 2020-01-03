import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  board: {
    width: 312,
    height: 312,
    borderWidth: 3,
    borderColor: '#0A4FEF',
  },
  line: {
    position: 'absolute',
    width: 3,
    height: 306,
    backgroundColor: '#0A4FEF',
    transform: [{translateX: 100}],
  },
});
