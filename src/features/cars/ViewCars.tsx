import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {appStyles} from '../../themes/Common-theme';
import ViewAllCarCard from '../../components/cards/carCards';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {ICarDetails} from '../../interfaces/user';
import {capitalizeFirstLetter} from '../../utils/String.utils';

const ViewCars = () => {
  const token: string = useSelector((state: any) => state.auth.token);
  const [cars, setCars] = useState<ICarDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getAllCars();
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllCars = async () => {
    try {
      const response = await axios.get('http://localhost:3200/api/cars', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCars(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <View style={styles.upperContainer}>
      <View style={styles.header}>
        <Text>View all cars</Text>
      </View>
      <View style={styles.innerContainer}>
        <ScrollView>
          <View style={styles.container}>
            {/* <Text >View all cars</Text> */}
            <View>
              {loading ? (
                <Text>Loading...</Text>
              ) : cars.length > 0 ? (
                cars.map((car, index) => (
                  <ViewAllCarCard
                    key={index}
                    brand={capitalizeFirstLetter(car.brand)}
                    rating={car.rate}
                    name={car.car_name}
                    price={car.price_per_day}
                    seat={car.seats}
                    speed={car.speed}
                    transmission={capitalizeFirstLetter(car.transmission)}
                  />
                ))
              ) : (
                <Text>Nothing to show</Text>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ViewCars;

const styles = StyleSheet.create({
  upperContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: appStyles.background.color,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  innerContainer: {
    //
  },
  c1: {
    flex: 1,
    backgroundColor: 'blue',
  },
  c2: {
    flex: 4,
    backgroundColor: 'red',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
});
