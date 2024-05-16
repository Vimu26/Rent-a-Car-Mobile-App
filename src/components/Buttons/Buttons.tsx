import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native';

//This Button With Background Color
export const PrimaryFullButton = ({onPress, title}: any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

//This Button WithOut Background Color
export const SecondaryFullButton = ({onPress, title}: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text2}>{title}</Text>
    </TouchableOpacity>
  );
};

//This Button With dark Background and Image
export const ImageButton = ({onPress, title, imageUrl}: any) => {
  return (
    <View style={styles.iconButton}>
      <TouchableOpacity style={styles.imageIconContainer} onPress={onPress}>
        <Image style={styles.icon} source={imageUrl} />
        <Text style={styles.text2}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const IconOnlyButton = ({
  onPress,
  icon,
  width,
  backgroundColor,
}: any) => {
  return (
    <View style={[styles.iconButton, {backgroundColor: backgroundColor}]}>
      <TouchableOpacity
        style={[styles.iconContainer, {width: width}]}
        onPress={onPress}>
        <Image style={styles.iconImage} source={icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6679c0',
    padding: 10,
    borderRadius: 5,
    width: 320,
    height: 50,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginBottom: 8,
  },
  text: {
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 3,
  },
  container: {
    width: 320,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text2: {
    color: '#acb4c4',
    textAlign: 'center',
    fontSize: 18,
    padding: 3,
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  iconImage: {
    height: 30,
    width: 30,
    resizeMode: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#272f3e',
    borderRadius: 5,
  },
  imageIconContainer: {
    flexDirection: 'row',
    width: 320,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
