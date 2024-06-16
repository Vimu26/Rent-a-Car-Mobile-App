// ProfileStackNavigator.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../features/Profile/Profile';
import SignIn from '../auth/SignIn';

// import AccountInformation from '../../features/AccountInformation/AccountInformation'; // Adjust path as necessary
// import TermsOfService from '../../features/TermsOfService/TermsOfService'; // Adjust path as necessary
// import PrivacyPolicy from '../../features/PrivacyPolicy/PrivacyPolicy'; // Adjust path as necessary

const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
  function headerImage(): React.ReactNode {
    throw new Error('Function not implemented.');
  }

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

export default ProfileStackNavigator;
