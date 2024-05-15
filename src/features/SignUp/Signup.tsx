import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  BothSideIconInputBox,
  LeftIconInputBox,
} from '../../components/inputBoxes';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
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
      <View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2736',
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailBox: {
    marginBottom: 15,
  },
  header: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subHeader: {
    color: '#acb4c4',
    lineHeight: 30,
    fontSize: 18,
    marginBottom: 20,
  },
});

export default SignUp;
