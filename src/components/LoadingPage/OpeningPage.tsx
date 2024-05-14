import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const OpeningPage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://www.freepnglogos.com/uploads/cleveland-auto-show-car-logo-png-25.png',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
  },
});

export default OpeningPage;
