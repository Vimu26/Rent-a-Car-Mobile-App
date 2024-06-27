// ProfileStackNavigator.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../features/Profile/Profile';
import SignIn from '../auth/SignIn';
import {SafeAreaView, View, Image, StyleSheet} from 'react-native';
import {appStyles} from '../../themes/Common-theme';

// import AccountInformation from '../../features/AccountInformation/AccountInformation'; // Adjust path as necessary
// import TermsOfService from '../../features/TermsOfService/TermsOfService'; // Adjust path as necessary
// import PrivacyPolicy from '../../features/PrivacyPolicy/PrivacyPolicy'; // Adjust path as necessary

const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
  const headerImage = () => {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.outer}>
          <View style={styles.viewHeader}>
            <Image
              source={require('../../assets/logo-no-background.png')}
              style={styles.imageView}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <Stack.Navigator initialRouteName="ProfilePage">
      <Stack.Screen
        name="ProfilePage"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'Welcome',
          headerStyle: {
            backgroundColor: '#6679c0',
          },
          header: () => headerImage(),
        }}
      />
      {/* <Stack.Screen name="AccountInformation" component={AccountInformation} />
      <Stack.Screen name="TermsOfService" component={TermsOfService} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} /> */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: appStyles.cardContainer.color,
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: appStyles.screenHeight.height * 0.11,
    justifyContent: 'center',
    backgroundColor: '#272f3e',
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    overflow: 'hidden',
  },
  imageView: {
    width: appStyles.screenWidth.width * 0.3,
    height: appStyles.screenHeight.height * 0.08,
    objectFit: 'fill',
    marginRight: 10,
  },
  outer: {
    backgroundColor: '#1f2736',
  },
});

export default ProfileStackNavigator;
