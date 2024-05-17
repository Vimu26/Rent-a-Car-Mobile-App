/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OpeningPage from './src/features/LoadingPage/OpeningPage';
import {Image, StyleSheet, Text, View} from 'react-native';
import LandingPage from './src/features/LandingPage/LandingPage';
import BottomTabNavigator from './src/components/BottomTab/BottomTab';
import {appStyles} from './src/themes/Common-theme';
import SignIn from './src/features/auth/SignIn';
import SignUp from './src/features/auth/SignUp';
import {TouchableOpacity} from 'react-native';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  const headerImage = () => {
    return (
      <View style={styles.outer}>
        <View style={styles.viewHeader}>
          <Image
            source={require('./src/assets/logo-no-background.png')}
            style={styles.imageView}
          />
        </View>
      </View>
    );
  };

  const SignUpHeader = () => {
    const navigation = useNavigation();
    const goBack = () => {
      navigation.goBack();
    };
    return (
      <View style={styles.headerUp}>
        <View style={styles.backImageContainer}>
          <TouchableOpacity onPress={goBack}>
            <Image
              source={require('./src/assets/common/icons8-back-48.png')}
              style={styles.backImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.upText}>
          <TouchableOpacity onPress={goBack}>
            <Text style={styles.upText2}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OpeningPage"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#242a43',
          },
        }}>
        <Stack.Screen
          name="OpeningPage"
          component={OpeningPage}
          options={{
            title: 'Welcome',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Landing-Page"
          component={LandingPage}
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
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            header: () => SignUpHeader(),
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Home"
          options={{
            // headerShown: false,
            headerStyle: {
              backgroundColor: appStyles.background.color,
            },
          }}>
          {() => <BottomTabNavigator />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 90,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#272f3e',
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    overflow: 'hidden',
  },
  imageView: {
    width: 90,
    height: 50,
    objectFit: 'fill',
    marginRight: 10,
  },
  outer: {
    backgroundColor: '#1f2736',
  },
  headerUp: {
    backgroundColor: appStyles.background.color,
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 80,
  },
  backImage: {
    //backgroundColor: appStyles.background.color,
  },
  backImageContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  upText: {
    flex: 1,
    alignItems: 'flex-end',
  },
  upText2: {
    color: appStyles.Text.color,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
