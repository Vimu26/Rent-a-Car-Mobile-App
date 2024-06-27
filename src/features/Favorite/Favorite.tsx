import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ITopRatedCars} from '../Home/Home';
import {appStyles} from '../../themes/Common-theme';
import {capitalizeFirstLetter} from '../../utils/String.utils';
import ViewAllCarCard from '../../components/cards/carCards';
import {setFavCars} from '../../state/cars/favoriteCras';

const Favorite = () => {
  const dispatch = useDispatch();
  const FavCars: ITopRatedCars[] = useSelector(
    (state: any) => state.favoriteCars.favCars,
  );

  const favToggled = (id: string) => {
    const newFvCars = FavCars.filter(data => {
      return id !== data._id.toString();
    });
    dispatch(setFavCars(newFvCars));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {FavCars.length > 0 ? (
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.heading}>Favorite Cars</Text>
            {FavCars.map((car, index) => (
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
          </ScrollView>
        ) : (
          <View style={styles.container2}>
            <Text style={styles.notFound}>No Favorite Cars Found</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: appStyles.background.color,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  heading: {
    fontSize: 30,
    color: appStyles.Text.color,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  notFound: {
    fontSize: 30,
    color: appStyles.Text.color,
    fontWeight: 'bold',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Favorite;
