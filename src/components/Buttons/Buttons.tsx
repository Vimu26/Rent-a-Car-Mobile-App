import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const PrimaryFullButton = ({onPress, title}: any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export const SecondaryFullButton = ({onPress, title}: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text2}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#6679c0',
    padding: 10,
    borderRadius: 5,
    width: 300,
    color: 'white',
    textAlign: 'center',
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
    flex: 1,
    width: 300,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text2: {
    color: '#acb4c4',
    textAlign: 'center',
    fontSize: 18,
    padding: 3,
  },
});
