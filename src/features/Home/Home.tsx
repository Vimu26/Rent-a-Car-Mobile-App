import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {appStyles} from '../../themes/Common-theme';

const Home = () => {
  return (
    <View style={[styles.container, appStyles.mainDark]}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;
