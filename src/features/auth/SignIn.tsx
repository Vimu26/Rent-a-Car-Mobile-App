import React, {useState} from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';
import {
  BothSideIconInputBox,
  LeftIconInputBox,
} from '../../components/Input Boxes/inputBoxes';
import {ImageButton, PrimaryFullButton} from '../../components/Buttons/Buttons';
import {ILogin} from '../../interfaces/user';
import axios from 'axios';
import {Controller, useForm} from 'react-hook-form';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setLogin} from '../../state/auth/auth';

const SignIn = ({navigation}: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const disPatch = useDispatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors, isValid},
    clearErrors,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  useFocusEffect(
    React.useCallback(() => {
      reset();
      clearErrors();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  const onLogin = async (data: ILogin) => {
    try {
      const response = await axios.post(
        'http://localhost:3200/api/users/oauth/login',
        data,
        {
          headers: {
            'content-Type': 'application/json',
          },
        },
      );
      if (response.data) {
        disPatch(
          setLogin({
            user: response.data.user,
            token: response.data.token,
          }),
        );
        setTimeout(() => {
          reset();
          clearErrors();
          navigation.navigate('Home');
        }, 500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = () => {
    navigation.navigate('Home');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Create an Account</Text> */}
      <Text style={styles.header}>Welcome Back!</Text>
      <View style={styles.emailBox}>
        <Controller
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email address',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <LeftIconInputBox
              value={value}
              KeyBoardType="email"
              onChangeTextBox={onChange}
              placeholder="Email Address"
              imageUrl={require('../../assets/email.png')}
              InputType="email"
              onBlur={onBlur}
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}
      </View>

      <View style={styles.passwordBox}>
        <Controller
          control={control}
          rules={{
            required: 'Password is required',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <BothSideIconInputBox
              value={value}
              KeyBoardType="default"
              onChangeTextBox={onChange}
              placeholder="Password"
              onRightImagePress={setIsVisible}
              onBlur={onBlur}
              leftImageUrl={require('../../assets/icons8-lock-48.png')}
              rightImageUrl={
                isVisible
                  ? require('../../assets/icons8-visible-60.png')
                  : require('../../assets/icons8-not-visible-60.png')
              }
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}
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
        <PrimaryFullButton
          onPress={handleSubmit(onLogin)}
          title="Sign In"
          disabled={!isValid}
        />
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
          onPress={handleSignIn}
          title="Continue With Facebook"
        />
      </View>
      <View style={styles.button}>
        <ImageButton
          imageUrl={require('../../assets/icons8-google-96.png')}
          onPress={handleSignIn}
          title="Continue With Gmail"
        />
      </View>
      <View style={styles.textWrapperBottom}>
        <Text>
          <Text style={styles.normalText}>Create an account? </Text>{' '}
          <Text style={styles.linkText} onPress={handleSignUp}>
            Sign Up
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
    marginBottom: 20,
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
  errorText: {
    fontSize: 13,
    marginTop: 2,
    color: 'red',
    marginLeft: 5,
  },
});

export default SignIn;
