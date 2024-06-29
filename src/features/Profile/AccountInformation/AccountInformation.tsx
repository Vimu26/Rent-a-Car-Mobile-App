import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AccountInformation = () => {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AccountInformation;
