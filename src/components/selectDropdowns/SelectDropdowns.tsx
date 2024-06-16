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
  onChange: (item: any) => void;
  search: boolean;
  width: number;
}

const CommonSelectDropDown = ({
  data = [],
  dropDownHeight = 200,
  placeholder = '',
  value = null,
  onBlur = () => {},
  onChange = () => {},
  search = false,
  width = appStyles.screenWidth.width,
}: IDropDownProps) => {
  return (
    <View style={styles.out}>
      <View style={[styles.container, {width: width}]}>
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
          placeholder={`Select ${placeholder}`}
          searchPlaceholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={item => {
            onChange(item);
          }}
        />
      </View>
    </View>
  );
};

export default CommonSelectDropDown;

const styles = StyleSheet.create({
  out: {
    flex: 1,
    width: appStyles.screenWidth.width,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
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
    backgroundColor: appStyles.background.color,
  },
  dropdownText: {
    color: appStyles.Text.color,
  },
});
