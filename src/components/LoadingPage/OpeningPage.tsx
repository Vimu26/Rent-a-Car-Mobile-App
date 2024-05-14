import React, {useEffect} from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {appStyles} from '../../themes/Common-theme';

const OpeningPage = ({navigation}: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={[styles.container, appStyles.mainDark]}>
      <Text style={styles.text}>Rent a Car</Text>
      <Image
        style={styles.logo}
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
  logo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    color: '#acb4c4',
    fontFamily: 'cursive',
  },
});

export default OpeningPage;
