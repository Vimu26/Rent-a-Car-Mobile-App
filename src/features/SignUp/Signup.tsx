import React, {useState} from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';
import {
  BothSideIconInputBox,
  LeftIconInputBox,
} from '../../components/Input Boxes/inputBoxes';
import {ImageButton, PrimaryFullButton} from '../../components/Buttons/Buttons';

const SignUp = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleSignUp = () => {
    console.log(email, password);
    console.log(navigation);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create an Account</Text>
      <Text style={styles.subHeader}>Welcome Back!</Text>
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
      <View style={styles.textWrapper}>
        <Text style={styles.normalText}>
          By Signing up, you agree to our{' '}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('http://google.com')}>
            Terms of Services
          </Text>
          <Text style={styles.normalText}> and </Text>
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('http://google.com')}>
            Privacy Policy.
          </Text>
        </Text>
      </View>
      <View style={styles.signUpButton}>
        <PrimaryFullButton onPress={handleSignUp} title="Sign Up" />
      </View>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <View>
          <Text style={styles.dividerText}>or sign up with</Text>
        </View>
        <View style={styles.divider} />
      </View>
      <View style={styles.button}>
        <ImageButton
          imageUrl={require('../../assets/icons8-facebook-96.png')}
          onPress={handleSignUp}
          title="Continue With Facebook"
        />
      </View>
      <View style={styles.button}>
        <ImageButton
          imageUrl={require('../../assets/icons8-google-96.png')}
          onPress={handleSignUp}
          title="Continue With Gmail"
        />
      </View>
      <View style={styles.textWrapperBottom}>
        <Text>
          <Text style={styles.normalText}>Do you have an account? </Text>{' '}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('http://google.com')}>
            Sign in
          </Text>
        </Text>
      </View>
      <Text
        style={styles.linkText}
        onPress={() => Linking.openURL('http://google.com')}>
        Continue as a guest
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2736',
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailBox: {
    marginBottom: 15,
  },
  passwordBox: {
    marginBottom: 15,
  },
  header: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subHeader: {
    color: '#acb4c4',
    lineHeight: 30,
    fontSize: 18,
    marginTop: 5,
    marginBottom: 10,
  },
  linkText: {
    color: '#6679c0',
  },
  normalText: {
    color: '#acb4c4',
  },
  textWrapper: {
    marginLeft: 15,
    marginRight: 15,
  },
  signUpButton: {
    marginBottom: 10,
    marginTop: 20,
  },
  button: {
    marginBottom: 10,
    marginTop: 5,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  divider: {
    width: 120,
    height: 1,
    backgroundColor: '#acb4c4',
  },
  dividerText: {
    width: 100,
    textAlign: 'center',
    color: '#acb4c4',
  },
  textWrapperBottom: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default SignUp;