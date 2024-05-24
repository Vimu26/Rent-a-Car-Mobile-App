import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {appStyles} from '../../themes/Common-theme';
import {IDropDownData} from '../../features/filters/Filters';

export interface IDropDownProps {
  data: IDropDownData[];
  dropDownHeight: number;
  placeholder: string;
  value: any;
  onBlur: any;
  onChange: any;
  search: boolean;
}

const CommonSelectDropDown = ({
  data,
  dropDownHeight,
  placeholder,
  value,
  onBlur,
  onChange,
  search,
}: IDropDownProps) => {
  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        containerStyle={styles.dropdownStyles}
        data={data}
        activeColor={appStyles.main.backgroundColor}
        search={search}
        itemTextStyle={styles.dropdownText}
        maxHeight={dropDownHeight}
        autoScroll={false}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={item => {
          onChange(item);
        }}
      />
    </View>
  );
};

export default CommonSelectDropDown;

const styles = StyleSheet.create({
  container: {
    // padding: 16,
  },
  dropdown: {
    height: 60,
    borderColor: appStyles.Text.color,
    backgroundColor: appStyles.cardContainer.color,
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: appStyles.Text.color,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: appStyles.Text.color,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 5,
  },
  dropdownStyles: {
    backgroundColor: appStyles.cardContainer.color,
  },
  dropdownText: {
    color: appStyles.Text.color,
  },
});
