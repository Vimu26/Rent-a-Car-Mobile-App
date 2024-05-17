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

const SignUp = ({navigation}: any) => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      contact: '',
      password: '',
    },
  });

  const onSubmit = (data: IUser) => {
    console.log(data);
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
                required: true,
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
              <Text style={styles.errorText}>Name is required.</Text>
            )}
          </View>
          <View style={styles.emailBox}>
            <Controller
              control={control}
              rules={{
                required: true,
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
              <Text style={styles.errorText}>Email is required.</Text>
            )}
          </View>
          <View style={styles.emailBox}>
            <Controller
              control={control}
              rules={{
                required: true,
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
              <Text style={styles.errorText}>Contact Number is required.</Text>
            )}
          </View>
          <View style={styles.passwordBox}>
            <Controller
              control={control}
              rules={{
                required: true,
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
              <Text style={styles.errorText}>Password is required.</Text>
            )}
          </View>
          <View style={styles.signUpButton}>
            <PrimaryFullButton
              onPress={handleSubmit(onSubmit)}
              title="Sign Up"
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
