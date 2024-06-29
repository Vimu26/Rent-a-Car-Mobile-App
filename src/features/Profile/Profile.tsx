import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {appStyles} from '../../themes/Common-theme';
import TouchableBar from '../../components/TouchableBar/TouchableBar';
import {capitalizeAndReplace} from '../../utils/String.utils';
import {PROFILE_CLICKS} from '../../types/types';

const Profile = ({navigation}: any) => {
  // const navigation = useNavigation();
  const onClick = (name: string) => {
    const screenName = capitalizeAndReplace(name);
    console.log(screenName);
    switch (screenName) {
      case PROFILE_CLICKS.ACCOUNT_INFORMATION:
        navigation.navigate('AccountInformation');
        break;
      case PROFILE_CLICKS.TERMS_OF_SERVICE:
        // navigation.navigate('TermsOfService');
        break;
      case PROFILE_CLICKS.PRIVACY_POLICY:
        // navigation.navigate('PrivacyPolicy');
        break;
      case PROFILE_CLICKS.LOGOUT:
        navigation.navigate('SignIn');
        break;
      default:
    }
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.heading}>Profile</Text>
        <View style={styles.accountContainer}>
          <Text style={styles.headerText}>Account</Text>
          <TouchableBar
            heading={'Account Information'}
            leftIcon={require('../../assets/common/icons8-user-50.png')}
            rightIcon={require('../../assets/common/icons8-forward-50.png')}
            onPress={onClick}
          />
        </View>
        <View style={styles.settingsContainer}>
          <Text style={styles.headerText}>General Settings</Text>
          <TouchableBar
            heading={'Terms of Service'}
            leftIcon={require('../../assets/common/icons8-terms-and-conditions-48.png')}
            rightIcon={require('../../assets/common/icons8-forward-50.png')}
            onPress={onClick}
          />
          <TouchableBar
            heading={'Privacy Policy'}
            leftIcon={require('../../assets/common/icons8-privacy-policy-48.png')}
            rightIcon={require('../../assets/common/icons8-forward-50.png')}
            onPress={onClick}
          />
          <TouchableBar
            heading={'Logout'}
            leftIcon={require('../../assets/common/icons8-logout-48.png')}
            onPress={onClick}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appStyles.background.color,
    paddingHorizontal: appStyles.screenWidth.width * 0.025,
  },
  scrollContainer: {
    paddingBottom: appStyles.screenHeight.height * 0.12,
  },
  heading: {
    fontSize: 30,
    color: appStyles.Text.color,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    paddingTop: 50,
  },
  accountContainer: {
    marginBottom: 25,
  },
  settingsContainer: {},
  headerText: {
    marginBottom: 10,
    color: appStyles.Text.color,
    fontSize: 17,
  },
});

export default Profile;
