import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {appStyles} from '../../themes/Common-theme';
import {
  LeftIconInputBox,
  BothSideIconInputBox,
} from '../../components/Input Boxes/inputBoxes';
import {PrimaryFullButton} from '../../components/Buttons/Buttons';

const SignUp = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  //   const navigation = useNavigation();

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };
  const handleSignUp = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.viewHeader}>
          <Image
            source={require('../../assets/logo-no-background.png')}
            style={styles.imageView}
          />
        </View>
        <Text style={styles.headerText}>Create Your Account</Text>
        <View style={styles.emailBox}>
          <LeftIconInputBox
            value={email}
            KeyBoardType="email"
            onChangeTextBox={handleEmailChange}
            placeholder="Name"
            imageUrl={require('../../assets/person.png')}
            InputType="email"
          />
        </View>
        <View style={styles.emailBox}>
          <LeftIconInputBox
            value={email}
            KeyBoardType="email"
            onChangeTextBox={handleEmailChange}
            placeholder="Email Address"
            imageUrl={require('../../assets/email.png')}
            InputType="email"
          />
        </View>
        <View style={styles.emailBox}>
          <LeftIconInputBox
            value={email}
            KeyBoardType="numeric"
            onChangeTextBox={handleEmailChange}
            placeholder="Contact Number"
            imageUrl={require('../../assets/phone.png')}
            InputType="numeric"
          />
        </View>
        <View style={styles.passwordBox}>
          <BothSideIconInputBox
            value={password}
            KeyBoardType="default"
            onChangeTextBox={handlePasswordChange}
            placeholder="Password"
            onRightImagePress={setIsVisible}
            leftImageUrl={require('../../assets/icons8-lock-48.png')}
            rightImageUrl={
              isVisible
                ? require('../../assets/icons8-visible-60.png')
                : require('../../assets/icons8-not-visible-60.png')
            }
          />
        </View>
        <View style={styles.signUpButton}>
          <PrimaryFullButton onPress={handleEmailChange} title="Sign Up" />
        </View>
        <View style={styles.textWrapperBottom}>
          <Text>
            <Text style={styles.normalText}>Already have an account? </Text>{' '}
            <Text style={styles.linkText} onPress={handleSignUp}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appStyles.background.color,
  },
  innerContainer: {
    bottom: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 25,
  },
  emailBox: {
    marginBottom: 20,
  },
  passwordBox: {
    marginBottom: 20,
  },
  signUpButton: {
    marginBottom: 10,
    marginTop: 5,
  },
  textWrapperBottom: {
    marginLeft: 15,
    marginRight: 15,
    // marginTop: 15,
    marginBottom: 10,
  },
  linkText: {
    color: '#6679c0',
    fontSize: 20,
  },
  normalText: {
    color: '#acb4c4',
    fontSize: 20,
  },
  viewHeader: {
    marginBottom: 10,
  },
  imageView: {
    width: 120,
    height: 70,
    objectFit: 'fill',
    marginRight: 10,
  },
});
