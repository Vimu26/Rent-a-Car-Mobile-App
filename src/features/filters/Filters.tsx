import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomInputBox} from '../../components/Input Boxes/inputBoxes';
import {appStyles} from '../../themes/Common-theme';
import {Controller, useForm} from 'react-hook-form';
import {
  PrimaryFullButton,
  SecondaryBorderButton,
} from '../../components/Buttons/Buttons';
import CommonSelectDropDown from '../../components/selectDropdowns/SelectDropdowns';
import RatingSelector from '../../components/RatingSelector/RatingSelector';

export interface IDropDownData {
  label: string;
  value: string;
}
const data: IDropDownData[] = [
  {label: 'ALL', value: '1'},
  {label: 'Audi', value: '2'},
  {label: 'Benz', value: '3'},
  {label: 'Bmw', value: '4'},
  {label: 'Ford', value: '5'},
  {label: 'Honda', value: '6'},
  {label: 'Mazda', value: '7'},
  {label: 'Mitsubishi', value: '8'},
  {label: 'Nissan', value: '9'},
  {label: 'Porsche', value: '10'},
  {label: 'Toyota', value: '11'},
  {label: 'Item 7', value: '12'},
  {label: 'Item 8', value: '13'},
];

const TransmissionData: IDropDownData[] = [
  {label: 'ALL', value: '1'},
  {label: 'Automatic', value: '2'},
  {label: 'CVT', value: '3'},
  {label: 'Manual', value: '4'},
];

const Filters = () => {
  const {control, handleSubmit, reset} = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.priceContainer}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInputBox
                onChange={onChange}
                value={value}
                width={140}
                height={60}
                placeHolder={'0'}
                label={'Min Price/day ($)'}
                keyBoardType={'numeric'}
                onBlur={onBlur}
              />
            )}
            name="min"
          />
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInputBox
                onChange={onChange}
                value={value}
                width={140}
                height={60}
                placeHolder={'0'}
                label={'Max Price/day ($)'}
                keyBoardType={'numeric'}
                onBlur={onBlur}
              />
            )}
            name="max"
          />
        </View>
        <View style={styles.ratingContainer}>
          <Controller
            control={control}
            render={({field: {onChange}}) => (
              <RatingSelector onChange={onChange} defaultRating={0} />
            )}
            name="rating"
          />
        </View>
        <View style={styles.brandContainer}>
          <Text style={styles.label}>Car Brand</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CommonSelectDropDown
                data={data}
                dropDownHeight={200}
                placeholder={'Brand'}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                search={true}
              />
            )}
            name="brand"
          />
        </View>
        <View style={styles.yearContainer}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInputBox
                onChange={onChange}
                value={value}
                width={350}
                height={60}
                placeHolder={'0000'}
                label={'Model Year'}
                keyBoardType={'numeric'}
                onBlur={onBlur}
              />
            )}
            name="year"
          />
        </View>
        <View style={styles.TransmissionContainer}>
          <Text style={styles.label}>Transmission</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CommonSelectDropDown
                data={TransmissionData}
                dropDownHeight={200}
                placeholder={'Transmission'}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                search={true}
              />
            )}
            name="transmission"
          />
        </View>
        <View style={styles.buttonContainer}>
          <SecondaryBorderButton
            onPress={() => reset()}
            title={'Reset Filters'}
            width={170}
          />
          <PrimaryFullButton
            onPress={handleSubmit(onSubmit)}
            title="Filter"
            width={170}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // paddingTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: appStyles.background.color,
    // paddingTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  ratingContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandContainer: {
    marginTop: 15,
  },
  yearContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: appStyles.Text.color,
    marginBottom: 3,
    fontSize: 16,
    fontWeight: '600',
  },
  TransmissionContainer: {
    marginTop: 15,
  },
});

export default Filters;
