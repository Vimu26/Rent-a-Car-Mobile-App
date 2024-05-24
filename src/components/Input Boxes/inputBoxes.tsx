import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardTypeOptions,
  Text,
} from 'react-native';
import {appStyles} from '../../themes/Common-theme';

export const LeftIconInputBox = ({
  value,
  KeyBoardType,
  onChangeTextBox,
  placeholder,
  InputType,
  imageUrl,
  onBlur,
}: any) => {
  return (
    <SafeAreaView>
      <View style={styles.sectionStyle}>
        <Image source={imageUrl} style={styles.imageStyle} />
        <TextInput
          style={styles.input1}
          value={value}
          keyboardType={KeyBoardType}
          placeholder={placeholder}
          onChangeText={onChangeTextBox}
          cursorColor="white"
          onBlur={onBlur}
          inputMode={InputType}
          placeholderTextColor={appStyles.Text.color}
          underlineColorAndroid="transparent"
        />
      </View>
    </SafeAreaView>
  );
};

export const BothSideIconInputBox = ({
  value,
  KeyBoardType,
  onChangeTextBox,
  placeholder,
  InputType,
  leftImageUrl,
  rightImageUrl,
  onRightImagePress,
  onBlur,
}: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleRightImagePress = () => {
    setIsVisible(!isVisible);
    if (onRightImagePress) {
      onRightImagePress(!isVisible);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={leftImageUrl} style={styles.imageStyle} />
          <TextInput
            style={styles.input2}
            value={value}
            keyboardType={KeyBoardType}
            placeholder={placeholder}
            onChangeText={onChangeTextBox}
            cursorColor="white"
            inputMode={InputType}
            secureTextEntry={!isVisible}
            placeholderTextColor={appStyles.Text.color}
            underlineColorAndroid="transparent"
            onBlur={onBlur}
          />
        </View>
        <View style={styles.backImage}>
          <TouchableOpacity onPress={handleRightImagePress}>
            <Image source={rightImageUrl} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export const SearchInputBox = ({
  value,
  KeyBoardType,
  onChangeTextBox,
  placeholder,
  InputType,
  imageUrl,
  width,
  borderWidth,
  backgroundColor,
  borderColor,
}: any) => {
  return (
    <SafeAreaView>
      <View
        style={[
          styles.inputSectionStyle,
          {
            width: width,
            borderWidth: borderWidth,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
          },
        ]}>
        <Image source={imageUrl} style={styles.imageStyle} />
        <TextInput
          style={styles.input1}
          value={value}
          keyboardType={KeyBoardType}
          placeholder={placeholder}
          onChangeText={onChangeTextBox}
          cursorColor="white"
          inputMode={InputType}
          placeholderTextColor={appStyles.Text.color}
          underlineColorAndroid="transparent"
        />
      </View>
    </SafeAreaView>
  );
};

export interface ICustomTextBox {
  onChange: any;
  value: string;
  width: number;
  height: number;
  keyBoardType?: KeyboardTypeOptions | undefined;
  placeHolder: string;
  label: string;
  onBlur: any;
}

export const CustomInputBox = ({
  onChange,
  value,
  keyBoardType = 'default',
  placeHolder,
  label,
  width,
  height,
  onBlur,
}: ICustomTextBox) => {
  return (
    <SafeAreaView>
      <Text style={styles.customInputLabe}>{label}</Text>
      <TextInput
        placeholderTextColor={appStyles.Text.color}
        style={[
          styles.customInput,
          {
            width: width,
            height: height,
          },
        ]}
        onChangeText={onChange}
        placeholder={placeHolder}
        value={value}
        keyboardType={keyBoardType}
        onBlur={onBlur}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputSectionStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    height: 60,
    paddingHorizontal: 10,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: appStyles.Text.color,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 60,
    width: 320,
  },
  input2: {
    fontSize: 20,
    marginLeft: 5,
    color: 'white',
    overflow: 'hidden',
    width: 220,
  },
  input1: {
    fontSize: 20,
    marginLeft: 5,
    color: 'white',
    overflow: 'hidden',
    width: 260,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: appStyles.Text.color,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 60,
    width: 320,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backImage: {
    position: 'relative',
  },
  customInput: {
    borderColor: appStyles.Text.color,
    color: appStyles.Text.color,
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10,
    backgroundColor: appStyles.cardContainer.color,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
  },
  customInputLabe: {
    color: appStyles.Text.color,
    marginBottom: 3,
    fontSize: 16,
    fontWeight: '600',
  },
});
