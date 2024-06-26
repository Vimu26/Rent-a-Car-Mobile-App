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
import ViewCars from './src/features/cars/ViewCars';
import Filters from './src/features/filters/Filters';
import HeaderWithBackButton from './src/components/HeaderWithBackButton/HeaderWithBackButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import AccountInformation from './src/features/Profile/AccountInformation/AccountInformation';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  const headerImage = () => {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.outer}>
          <View style={styles.viewHeader}>
            <Image
              source={require('./src/assets/logo-no-background.png')}
              style={styles.imageView}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  };

  const headerWithBackButton = (name: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigation = useNavigation();
    const goBack = () => {
      navigation.goBack();
    };
    return (
      <SafeAreaView style={styles.safeArea2}>
        <View style={styles.headerUp}>
          <View style={styles.backImageContainer}>
            <TouchableOpacity onPress={goBack}>
              <Image
                source={require('./src/assets/common/icons8-back-100.png')}
                style={styles.backImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.upText}>
            <TouchableOpacity onPress={goBack}>
              <Text style={styles.upText2}>{name}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
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
            header: () => headerWithBackButton('Sign In'),
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: appStyles.background.color,
            },
          }}>
          {() => <BottomTabNavigator />}
        </Stack.Screen>
        <Stack.Screen
          name="ViewCars"
          component={ViewCars}
          options={{
            header: ({navigation}) => (
              <HeaderWithBackButton
                heading={'View all Cars'}
                navigation={navigation}
              />
            ),
            // header: () => headerWithBackButton('Home'),
            // headerBackVisible: false,
            // headerShown: false,
          }}
        />
        <Stack.Screen
          name="FilterCars"
          component={Filters}
          options={{
            header: ({navigation}) => (
              <HeaderWithBackButton
                heading={'Filters'}
                navigation={navigation}
              />
            ),
            // headerBackVisible: false,
            // headerShown: true,
          }}
        />
        <Stack.Screen
          name="AccountInformation"
          component={AccountInformation}
          options={{
            header: ({navigation}) => (
              <HeaderWithBackButton
                heading={'Account'}
                navigation={navigation}
              />
            ),
            // headerBackVisible: false,
            // headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
  headerUp: {
    backgroundColor: appStyles.background.color,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: appStyles.screenHeight.height * 0.08,
  },
  backImage: {
    //
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
  safeArea: {
    flex: 1,
    backgroundColor: appStyles.cardContainer.color,
  },
  safeArea2: {
    flex: 1,
    backgroundColor: appStyles.background.color,
  },
});

export default App;
