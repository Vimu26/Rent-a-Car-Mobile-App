import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {appStyles} from '../../themes/Common-theme';
import ViewAllCarCard from '../../components/cards/carCards';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {ICarDetails} from '../../interfaces/user';
import {ITopRatedCars} from '../Home/Home';
import {setFavCars} from '../../state/cars/favoriteCras';
import {capitalizeFirstLetter} from '../../utils/String.utils';

const ViewCars = () => {
  const token: string = useSelector((state: any) => state.auth.token);
  const [cars, setCars] = useState<ICarDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const FavCars: ITopRatedCars[] = useSelector(
    (state: any) => state.favoriteCars.favCars,
  );

  useEffect(() => {
    setTimeout(() => {
      getAllCars();
    }, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllCars = async () => {
    try {
      const response = await axios.get('http://localhost:3200/api/cars', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page: pageNumber,
          limit: 10,
        },
      });
      setPageNumber(prevPage => prevPage + 1);
      setCars(prevCars => [...prevCars, ...response.data]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      return [];
    }
  };

  const favToggled = (id: string) => {
    if (FavCars.some(favCar => favCar._id.toString() === id.toString())) {
      // const updatedFavorites = FavCars.filter(favCar => favCar._id !== car._id);
      // dispatch(setFavCars(updatedFavorites));
      console.log('d');
      return FavCars;
    } else {
      console.log('x');

      // const favoriteCar = {
      //   _id: car._id,
      //   brand: car.brand,
      //   car_name: car.car_name,
      //   price_per_day: car.price_per_day,
      //   rate: car.rate,
      //   seats: car.seats,
      //   transmission: car.transmission,
      //   speed: car.speed,
      // };
      const car = cars.find(car => id === car._id);
      if (car) {
        const favoriteCar = {
          _id: car._id,
          brand: car.brand,
          car_name: car.car_name,
          price_per_day: car.price_per_day,
          rate: car.rate,
          seats: car.seats,
          transmission: car.transmission,
          speed: car.speed,
        };
        const updatedFavorites = [...FavCars, favoriteCar];
        dispatch(setFavCars(updatedFavorites));
        return updatedFavorites;
      }
    }
  };

  const loadCars = async () => {
    try {
      getAllCars();
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.upperContainer}>
      <View style={styles.innerContainer}>
        <ScrollView>
          <View style={styles.container}>
            <View>
              {loading ? (
                <Text>Loading...</Text>
              ) : cars.length > 0 ? (
                <>
                  {cars.map((car, index) => (
                    <ViewAllCarCard
                      _id={car._id}
                      key={index}
                      brand={capitalizeFirstLetter(car?.brand)}
                      rating={car.rate}
                      name={car.car_name}
                      price={car.price_per_day}
                      seat={car.seats}
                      speed={car.speed}
                      transmission={capitalizeFirstLetter(car?.transmission)}
                      addedAsFavorite={true}
                      onToggleFavorite={favToggled}
                    />
                  ))}
                  <TouchableOpacity
                    style={styles.loadMoreContainer}
                    onPress={loadCars}>
                    <Text style={styles.loadMore}>Load more</Text>
                  </TouchableOpacity>
                </>
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
    marginBottom: 20,
  },
  innerContainer: {
    paddingTop: 60,
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
  loadMoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  loadMore: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});
