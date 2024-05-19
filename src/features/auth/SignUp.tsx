import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {appStyles} from '../../themes/Common-theme';
import {
  LeftIconInputBox,
  BothSideIconInputBox,
} from '../../components/Input Boxes/inputBoxes';
import {PrimaryFullButton} from '../../components/Buttons/Buttons';
import {Controller, useForm} from 'react-hook-form';
import {IUser} from '../../interfaces/user';
import {ScrollView} from 'react-native';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';

const SignUp = ({navigation}: any) => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors, isValid},
    clearErrors,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      contact: '',
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

  const onSubmit = async (data: IUser) => {
    try {
      const response = await axios.post(
        'http://localhost:3200/api/users/oauth/register',
        data,
        {
          headers: {
            'content-Type': 'application/json',
          },
        },
      );
      if (response.data) {
        setTimeout(() => {
          reset();
          clearErrors();
          navigation.goBack();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <View style={styles.viewHeader}>
            <Image
              source={require('../../assets/logo-no-background.png')}
              style={styles.imageView}
            />
          </View>
          <Text style={styles.headerText}>Create Your Account</Text>
          <View style={styles.emailBox}>
            <Controller
              control={control}
              rules={{
                required: 'Name is required',
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <LeftIconInputBox
                  value={value}
                  KeyBoardType="default"
                  placeholder="Name"
                  imageUrl={require('../../assets/person.png')}
                  InputType="default"
                  onBlur={onBlur}
                  onChangeTextBox={onChange}
                />
              )}
              name="name"
            />
            {errors.name && (
              <Text style={styles.errorText}>{errors.name.message}</Text>
            )}
          </View>
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
          <View style={styles.emailBox}>
            <Controller
              control={control}
              rules={{
                required: 'Contact Number is required',
                minLength: {
                  value: 10,
                  message: 'Contact Number must be exactly 10 digits',
                },
                maxLength: {
                  value: 10,
                  message: 'Contact Number must be exactly 10 digits',
                },
                pattern: {
                  value: /^\d{10}$/,
                  message: 'Enter a valid contact number',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <LeftIconInputBox
                  value={value}
                  KeyBoardType="numeric"
                  placeholder="Contact Number"
                  imageUrl={require('../../assets/phone.png')}
                  InputType="numeric"
                  onBlur={onBlur}
                  onChangeTextBox={onChange}
                />
              )}
              name="contact"
            />
            {errors.contact && (
              <Text style={styles.errorText}>{errors.contact.message}</Text>
            )}
          </View>
          <View style={styles.passwordBox}>
            <Controller
              control={control}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
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
          <View style={styles.signUpButton}>
            <PrimaryFullButton
              onPress={handleSubmit(onSubmit)}
              title="Sign Up"
              disabled={!isValid}
            />
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
      </ScrollView>
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
    paddingTop: 8,
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
  errorText: {
    fontSize: 13,
    marginTop: 2,
    color: 'red',
    marginLeft: 5,
  },
});
