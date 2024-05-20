// eslint-disable-next-line react-native/no-inline-styles
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {appStyles} from '../../themes/Common-theme';
import {CAR_BRANDS, TRANSMISSION_TYPES} from '../../types/types';

export interface cardDetails {
  brand: CAR_BRANDS | string;
  rating: number;
  name: string;
  price: number;
  seat: number;
  speed: number;
  transmission: TRANSMISSION_TYPES | string;
}

const ViewAllCarCard = ({
  brand,
  rating,
  name,
  price,
  seat,
  speed,
  transmission,
}: cardDetails) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContainerIn}>
        <View style={styles.containerHeader}>
          <View style={styles.star}>
            <Text style={styles.starText}>{rating}</Text>
            <Image
              style={styles.starImage}
              source={require('../../assets/common/star.png')}
            />
          </View>
          <View style={styles.favorite}>
            <TouchableOpacity>
              <Image
                style={[styles.starImage, styles.center]}
                source={require('../../assets/common/Favorite.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.image}>
            <Image
              style={styles.vehicleImage}
              source={require('../../assets/cars/Lovepik_com-401779325-rhino-modeling-a-sports-car.png')}
            />
          </View>
          <View style={styles.bottomUp}>
            <Text style={styles.carName}>
              {brand}&nbsp;{name}
            </Text>
            <Text style={styles.carPrice}>{price}$/day</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.bottomDown}>
            <View style={styles.bottomDownElement}>
              <View style={styles.innerElement}>
                <Image
                  style={styles.bottomImage}
                  source={require('../../assets/carCards/icons8-seat-50.png')}
                />
                <Text style={styles.bottomText}>{seat}&nbsp;Seats</Text>
              </View>
              <View style={styles.innerElement}>
                <Image
                  style={styles.bottomImage}
                  source={require('../../assets/carCards/icons8-speed-50.png')}
                />
                <Text style={styles.bottomText}>{speed}&nbsp;kmph</Text>
              </View>
              <View style={styles.innerElement}>
                <Image
                  style={styles.bottomImage}
                  source={require('../../assets/carCards/icons8-gear-stick-50.png')}
                />
                <Text style={styles.bottomText}>{transmission}</Text>
              </View>
            </View>
            {/* <View style={styles.bottomDownElement}>
            <View style={styles.innerElement}>
              <Image
                style={styles.bottomImage}
                source={require('../../assets/carCards/icons8-seat-50.png')}
              />
              <Text style={styles.bottomText}>8 Seats</Text>
            </View>
            <View style={styles.innerElement}>
              <Image
                style={styles.bottomImage}
                source={require('../../assets/carCards/icons8-speed-50.png')}
              />
              <Text style={styles.bottomText}>200 kmph</Text>
            </View>
            <View style={styles.innerElement}>
              <Image
                style={styles.bottomImage}
                source={require('../../assets/carCards/icons8-gear-stick-50.png')}
              />
              <Text style={styles.bottomText}>Automatic</Text>
            </View>
          </View> */}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewAllCarCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 280,
    width: 320,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: appStyles.cardContainer.color,
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  cardContainerIn: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',

    paddingVertical: 10,
  },
  image: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 50,
  },
  starImage: {
    width: 20,
    height: 20,
  },
  vehicleImage: {
    width: 200,
    height: 100,
    marginBottom: 10,
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favorite: {
    alignItems: 'flex-end',
  },
  starText: {
    marginRight: 5,
    color: appStyles.Text.color,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomUp: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomDown: {
    //
  },
  divider: {
    marginVertical: 10,
    borderBottomColor: appStyles.Text.color,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  carName: {
    fontSize: 20,
    color: appStyles.Text.color,
    fontWeight: 'bold',
  },
  carPrice: {
    fontSize: 20,
    color: appStyles.main.backgroundColor,
    fontWeight: 'bold',
  },
  bottomDownElement: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  innerElement: {
    flexDirection: 'column',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bottomText: {
    color: appStyles.Text.color,
    fontSize: 12,
  },
  bottomImage: {
    width: 30,
    height: 30,
  },
});
