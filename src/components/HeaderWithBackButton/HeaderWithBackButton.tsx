import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {appStyles} from '../../themes/Common-theme';

export interface IHeadingWithBack {
  heading: string;
  navigation?: any;
}

const HeaderWithBackButton = ({heading, navigation}: IHeadingWithBack) => {
  return (
    <SafeAreaView style={styles.safeArea2}>
      <View style={styles.headerUp}>
        <View style={styles.backImageContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../../assets/common/icons8-back-100.png')}
              style={styles.backImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.upText}>
          <TouchableOpacity>
            <Text style={styles.upText2}>{heading}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerUp: {
    backgroundColor: appStyles.background.color,
    flexDirection: 'row',
    alignItems: 'center',
    height: appStyles.screenHeight.height * 0.06,
  },
  backImage: {
    width: 30,
    height: 30,
  },
  backImageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  upText: {
    flex: 7,
    alignItems: 'center',
  },
  upText2: {
    color: appStyles.Text.color,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: -(appStyles.screenWidth.width * 0.15),
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

export default HeaderWithBackButton;
