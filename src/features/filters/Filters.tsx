import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
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

const FuelData: IDropDownData[] = [
  {label: 'ALL', value: '1'},
  {label: 'Diesel', value: '2'},
  {label: 'Electric', value: '3'},
  {label: 'Gasoline', value: '4'},
  {label: 'Petrol', value: '5'},
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
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.priceContainer}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInputBox
                onChange={onChange}
                value={value}
                width={appStyles.screenWidth.width * 0.45}
                height={appStyles.screenHeight.height * 0.05}
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
                width={appStyles.screenWidth.width * 0.45}
                height={appStyles.screenHeight.height * 0.05}
                placeHolder={'0'}
                label={'Max Price/day ($)'}
                keyBoardType={'numeric'}
                onBlur={onBlur}
              />
            )}
            name="max"
          />
        </View>
        <View style={styles.container2}>
          <View style={styles.brandContainer}>
            <Text style={styles.label}>Car Brand</Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CommonSelectDropDown
                  data={data}
                  dropDownHeight={200}
                  width={appStyles.screenWidth.width * 0.95}
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
        </View>
        <View style={styles.container2}>
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
                  width={appStyles.screenWidth.width * 0.95}
                  onBlur={onBlur}
                  onChange={onChange}
                  search={true}
                />
              )}
              name="transmission"
            />
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.FuelContainer}>
            <Text style={styles.label}>Fuel Type</Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CommonSelectDropDown
                  data={FuelData}
                  dropDownHeight={200}
                  width={appStyles.screenWidth.width * 0.95}
                  placeholder={'Fuel Type'}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  search={true}
                />
              )}
              name="fuelType"
            />
          </View>
        </View>

        <View style={styles.yearContainer}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInputBox
                onChange={onChange}
                value={value}
                width={appStyles.screenWidth.width * 0.45}
                height={appStyles.screenHeight.height * 0.05}
                placeHolder={'0000'}
                label={'Model Year'}
                keyBoardType={'numeric'}
                onBlur={onBlur}
              />
            )}
            name="year"
          />
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInputBox
                onChange={onChange}
                value={value}
                width={appStyles.screenWidth.width * 0.45}
                height={appStyles.screenHeight.height * 0.05}
                placeHolder={'0'}
                label={'Number of Seats'}
                keyBoardType={'numeric'}
                onBlur={onBlur}
              />
            )}
            name="seats"
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
      </ScrollView>
      <View style={styles.buttonOuter}>
        <View style={styles.buttonContainer}>
          <SecondaryBorderButton
            onPress={() => reset()}
            title={'Reset Filters'}
            width={appStyles.screenWidth.width * 0.45}
          />
          <PrimaryFullButton
            onPress={handleSubmit(onSubmit)}
            title="Filter"
            width={appStyles.screenWidth.width * 0.45}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appStyles.background.color,
    paddingTop: appStyles.screenHeight.height * 0.06,
  },
  scrollContainer: {
    paddingBottom: appStyles.screenHeight.height * 0.12,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  buttonOuter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: appStyles.screenWidth.width * 0.025,
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    backgroundColor: appStyles.background.color,
  },
  ratingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandContainer: {
    marginTop: 15,
    width: appStyles.screenWidth.width * 0.95,
  },
  yearContainer: {
    marginVertical: appStyles.screenHeight.height * 0.04,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    color: appStyles.Text.color,
    marginBottom: 3,
    fontSize: 16,
    fontWeight: '600',
    width: appStyles.screenWidth.width * 0.95,
  },
  TransmissionContainer: {
    marginTop: 15,
    width: appStyles.screenWidth.width * 0.95,
  },
  container2: {
    width: appStyles.screenWidth.width,
    justifyContent: 'center',
    alignItems: 'center',
    height: appStyles.screenHeight.height * 0.1,
  },
  FuelContainer: {
    marginTop: 15,
    width: appStyles.screenWidth.width * 0.95,
  },
});

export default Filters;
