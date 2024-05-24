import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {appStyles} from '../../themes/Common-theme';
import {
  PrimaryFullButton,
  SecondaryFullButton,
} from '../../components/Buttons/Buttons';

const LandingPage = ({navigation}: any) => {
  const continueAsGuest = () => {
    // Alert.alert('Secondary Button pressed');
    navigation.navigate('Home');
  };

  const getStarted = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={[styles.container, appStyles.mainDark]}>
      <Image style={styles.logo} source={require('../../assets/car.png')} />
      <Text style={styles.textHeader}>Rent your Car easily from our app</Text>
      <Text style={styles.textDescription}>
        Find the car for perfect any {'\n'} occasion in minutes. Book it
        instantly {'\n'}with your phone.
      </Text>
      <View style={styles.buttonContainer}>
        <PrimaryFullButton
          onPress={getStarted}
          title={'Get Started'}
          width={320}
        />
        <SecondaryFullButton
          onPress={continueAsGuest}
          title={'Continue as a guest'}
          width={320}
        />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 130,
  },
  textHeader: {
    marginLeft: 45,
    marginRight: 45,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#f7f7f7',
    textAlign: 'center',
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  textDescription: {
    color: '#acb4c4',
    fontSize: 17,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center',
    lineHeight: 25,
  },
  buttonContainer: {
    position: 'absolute',
    marginBottom: 10,
    bottom: 15,
    width: 'auto',
    alignItems: 'center',
  },
});

export default LandingPage;
