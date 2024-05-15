import React, {useEffect} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {appStyles} from '../../themes/Common-theme';

const OpeningPage = ({navigation}: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Landing-Page');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={[styles.container, appStyles.mainDark]}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo-no-background.png')}
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
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    color: '#acb4c4',
    fontFamily: 'cursive',
  },
});

export default OpeningPage;
