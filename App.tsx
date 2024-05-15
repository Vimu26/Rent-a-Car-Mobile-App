import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {StyleSheet, View} from 'react-native';
// import {appStyles} from './src/themes/Common-theme';
import OpeningPage from './src/features/LoadingPage/OpeningPage';
import Home from './src/features/LandingPage/LandingPage';
import SignUp from './src/features/SignUp/Signup';
import {Image, StyleSheet, View} from 'react-native';

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
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: 'Welcome',
            headerStyle: {
              backgroundColor: '#6679c0',
            },
            header: () => headerImage(),
            headerBackVisible: false,
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
});

export default App;
