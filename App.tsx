import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {StyleSheet, View} from 'react-native';
// import {appStyles} from './src/themes/Common-theme';
import OpeningPage from './src/components/LoadingPage/OpeningPage';
import Home from './src/features/Home/Home';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   imageView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default App;
