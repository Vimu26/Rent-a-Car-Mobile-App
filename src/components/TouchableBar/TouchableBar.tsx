import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {appStyles} from '../../themes/Common-theme';

type TouchableBarProps = {
  heading: string;
  leftIcon: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
};

const TouchableBar = ({heading, leftIcon, rightIcon}: TouchableBarProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={rightIcon ? styles.innerContainer : styles.innerContainer2}>
        <Image style={styles.img} source={leftIcon} />
        <Text style={rightIcon ? styles.text : styles.t2}>{heading}</Text>
        {rightIcon && <Image style={styles.img} source={rightIcon} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appStyles.cardContainer.color,
    borderRadius: 10,
    marginVertical: 10,
    height: appStyles.screenHeight.height * 0.065,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'space-between',
    height: appStyles.screenHeight.height * 0.065,
  },

  innerContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: appStyles.screenHeight.height * 0.065,
  },
  img: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    color: appStyles.Text.color,
    flex: 1,
  },
  t2: {
    fontSize: 20,
    color: '#FA5252',
  },
});

export default TouchableBar;
