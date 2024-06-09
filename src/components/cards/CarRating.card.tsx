import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {appStyles} from '../../themes/Common-theme';
import {ITopRatedCars} from '../../features/Home/Home';
import {capitalizeFirstLetter} from '../../utils/String.utils';

export interface ICarCardRating {
  car: ITopRatedCars;
  key?: number;
  isFavorite: boolean;
  onToggleFavorite: (car: ITopRatedCars) => void;
}

export interface IFavoriteCars {
  car: ITopRatedCars;
}

const CarCard = ({car, isFavorite, onToggleFavorite}: ICarCardRating) => {
  return (
    <View style={styles.carCard}>
      <View style={styles.carCardHeader}>
        <Image
          style={styles.carCardIcon}
          source={require('../../assets/brands/icons8-audi-a-german-automobile-manufacturer-of-luxury-vehicles-96.png')}
        />
        <TouchableOpacity onPress={() => onToggleFavorite(car)}>
          <Image
            style={styles.favIcon}
            source={
              isFavorite
                ? require('../../assets/common/Favorite-selected.png')
                : require('../../assets/common/Favorite.png')
            }
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('2');
        }}>
        <View style={styles.cardImg}>
          <Image
            style={styles.carImg}
            source={require('../../assets/cars/Lovepik_com-401434180-a-car.png')}
          />
        </View>
        <View style={styles.cardBottomTextContainer}>
          <Text style={styles.cardBottomText}>
            {capitalizeFirstLetter(car.brand)}&nbsp;{car.car_name}
          </Text>
          <View style={styles.cardRatings}>
            <Text style={styles.cardBottomText}>{car.rate}</Text>
            <Image
              style={styles.star}
              source={require('../../assets/common/star.png')}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  carCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  carCardIcon: {
    width: 40,
    height: 40,
  },
  favIcon: {
    width: 25,
    height: 25,
  },
  carImg: {
    width: 190,
    height: 110,
  },
  cardImg: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cardBottomText: {
    color: appStyles.Text.color,
  },
  cardRatings: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  star: {
    width: 15,
    height: 15,
  },
  carCard: {
    backgroundColor: '#272f3e',
    // borderWidth: 0.5,
    borderRadius: 10,
    width: 220,
    height: 220,
    marginHorizontal: 10,
  },
  carCardContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    height: 240,
    rowGap: 10,
    gap: 10,
  },
});

export default CarCard;
