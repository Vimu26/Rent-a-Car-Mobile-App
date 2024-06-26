import {Dimensions, StyleSheet} from 'react-native';

export const appStyles = StyleSheet.create({
  main: {
    backgroundColor: '#6679c0',
  },
  mainDark: {
    backgroundColor: '#1f2736',
  },
  background: {
    color: '#1f2736',
  },
  cardContainer: {
    color: '#272f3e',
  },
  Text: {
    color: '#acb4c4',
  },
  screenWidth: {
    width: Dimensions.get('window').width,
  },
  screenHeight: {
    height: Dimensions.get('window').height,
  },
});
