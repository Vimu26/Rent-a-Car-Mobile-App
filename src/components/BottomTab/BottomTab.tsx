/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../features/Home/Home';
import Favorite from '../../features/Favorite/Favorite';
import Profile from '../../features/Profile/Profile';
import {Image, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {appStyles} from '../../themes/Common-theme';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const tabBar = ({state, descriptors, navigation}: any) => {
    return (
      <View style={styles.tabBar}>
        {state.routes.map(
          (
            route: {key: string | number; name: any; params: any},
            index: any,
          ) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
            const iconMapSelected: any = {
              HomePage: require('../../assets/common/Home-selected.png'),
              Favorite: require('../../assets/common/Favorite-selected.png'),
              Profile: require('../../assets/common/Profile-selectd.png'),
            };
            const iconMapNotSelected: any = {
              HomePage: require('../../assets/common/Home.png'),
              Favorite: require('../../assets/common/Favorite.png'),
              Profile: require('../../assets/common/Profile.png'),
            };

            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                onLongPress={onLongPress}>
                <View style={styles.tabContainer}>
                  <Image
                    style={styles.tabIcon}
                    source={
                      isFocused
                        ? iconMapSelected[route.name]
                        : iconMapNotSelected[route.name]
                    }
                  />
                  <Text
                    style={{
                      color: isFocused
                        ? appStyles.main.backgroundColor
                        : appStyles.Text.color,
                    }}>
                    {label}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          },
        )}
      </View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{headerShown: false}}
      tabBar={props => tabBar({...props})}>
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="HomePage" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    overflow: 'hidden',
    height: appStyles.screenHeight.height * 0.085,
    backgroundColor: appStyles.background.color,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
