import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {appStyles} from '../../themes/Common-theme';

export interface IHeadingWithBack {
  heading: string;
  navigation?: any;
}

const HeaderWithBackButton = ({heading, navigation}: IHeadingWithBack) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.image}>
          <Image source={require('../../assets/common/icons8-back-48.png')} />
        </View>
        <Text style={styles.heading}>{heading}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appStyles.background.color,
    height: 60,
    paddingTop: 15,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    flex: 5,
    textAlign: 'center',
    fontSize: 25,
    color: appStyles.Text.color,
    marginLeft: '-20%',
    fontWeight: 'bold',
  },
});

export default HeaderWithBackButton;
