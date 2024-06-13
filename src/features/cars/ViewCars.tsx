import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {appStyles} from '../../themes/Common-theme';
import ViewAllCarCard from '../../components/cards/carCards';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {ICarDetails} from '../../interfaces/user';
import {capitalizeFirstLetter} from '../../utils/String.utils';
import {ITopRatedCars} from '../Home/Home';
import {setFavCars} from '../../state/cars/favoriteCras';

const ViewCars = () => {
  const token: string = useSelector((state: any) => state.auth.token);
  const [cars, setCars] = useState<ICarDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const FavCars: ITopRatedCars[] = useSelector(
    (state: any) => state.favoriteCars.favCars,
  );

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

  const favToggled = (id: string) => {
    const newFvCars = FavCars.filter(data => {
      return id !== data._id.toString();
    });
    dispatch(setFavCars(newFvCars));
  };

  return (
    <View style={styles.upperContainer}>
      {/* <View style={styles.header}>
        <Text>View all cars</Text>
      </View> */}
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
                    _id={car._id}
                    key={index}
                    brand={capitalizeFirstLetter(car.brand)}
                    rating={car.rate}
                    name={car.car_name}
                    price={car.price_per_day}
                    seat={car.seats}
                    speed={car.speed}
                    transmission={capitalizeFirstLetter(car.transmission)}
                    onToggleFavorite={favToggled}
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
