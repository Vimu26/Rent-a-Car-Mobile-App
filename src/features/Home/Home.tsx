import React, {useCallback, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {appStyles} from '../../themes/Common-theme';
import {SearchInputBox} from '../../components/Input Boxes/inputBoxes';
import {IconOnlyButton} from '../../components/Buttons/Buttons';
import {useDispatch, useSelector} from 'react-redux';
import {IUser} from '../../interfaces/user';
import CarCard from '../../components/cards/CarRating.card';
import axios from 'axios';
import {CAR_BRANDS, TRANSMISSION_TYPES} from '../../types/types';
import {useFocusEffect} from '@react-navigation/native';
import {setFavCars} from '../../state/cars/favoriteCras';
import {capitalizeFirstLetter} from '../../utils/String.utils';

export interface ITopRatedCars {
  _id: string;
  brand: CAR_BRANDS;
  car_name: string;
  price_per_day: number;
  rate: number;
  seats: number;
  transmission: TRANSMISSION_TYPES;
  speed: number;
}

const Home = ({navigation}: any) => {
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState<ITopRatedCars[]>([]);
  const [pageN, setPage] = useState(1);
  const [carsLoaded, setCarsLoaded] = useState(false);
  const dispatch = useDispatch();
  const FavCars: ITopRatedCars[] = useSelector(
    (state: any) => state.favoriteCars.favCars,
  );

  const token: string = useSelector((state: any) => state.auth.token);
  const user: IUser = useSelector((state: any) => state.auth.user);

  const brandsArrayList = [
    {
      logoName: require('../../assets//brands/icons8-bmw-96.png'),
      name: CAR_BRANDS.BMW,
    },
    {
      logoName: require('../../assets/brands/icons8-porsche-96.png'),
      name: CAR_BRANDS.PORSCHE,
    },
    {
      logoName: require('../../assets/brands/icons8-mercedes-benz-96.png'),
      name: CAR_BRANDS.BENZ,
    },
    {
      logoName: require('../../assets/brands/icons8-ford-96.png'),
      name: CAR_BRANDS.FORD,
    },
    {
      logoName: require('../../assets/brands/icons8-audi-a-german-automobile-manufacturer-of-luxury-vehicles-96.png'),
      name: CAR_BRANDS.AUDI,
    },
    {
      logoName: require('../../assets/brands/icons8-nissan-96.png'),
      name: CAR_BRANDS.NISSAN,
    },
    {
      logoName: require('../../assets/brands/icons8-toyota-96.png'),
      name: CAR_BRANDS.TOYOTA,
    },
    {
      logoName: require('../../assets/brands/icons8-honda-96.png'),
      name: CAR_BRANDS.HONDA,
    },
    {
      logoName: require('../../assets/brands/icons8-mitsubishi-96.png'),
      name: CAR_BRANDS.MITSUBISHI,
    },
    {
      logoName: require('../../assets/brands/icons8-mazda-96.png'),
      name: CAR_BRANDS.MAZDA,
    },
  ];

  const handleInputChange = (text: string) => {
    setSearchInput(text);
  };

  const onClickFilter = () => {
    navigation.navigate('FilterCars');
  };

  const handleViewAllClick = () => {
    navigation.navigate('ViewCars');
  };

  const toggleFavorite = (car: ITopRatedCars) => {
    if (FavCars.some(favCar => favCar._id.toString() === car._id.toString())) {
      const updatedFavorites = FavCars.filter(favCar => favCar._id !== car._id);
      dispatch(setFavCars(updatedFavorites));
      return updatedFavorites;
    } else {
      const updatedFavorites = [...FavCars, car];
      dispatch(setFavCars(updatedFavorites));
      return updatedFavorites;
    }
  };

  const getTopRatedCars = async (page: number, limit: number) => {
    try {
      const response = await axios.get(
        'http://localhost:3200/api/cars/get/ratings',
        {
          params: {
            page,
            limit,
          },
        },
      );
      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const loadCars = async () => {
    try {
      const newCars = await getTopRatedCars(pageN, 5);
      if (newCars) {
        setCars(prevCars => [...prevCars, ...newCars]);
        setPage(prevPage => prevPage + 1);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const getCarsByBrand = async (brand: CAR_BRANDS) => {
    try {
      const response = await axios.get('http://localhost:3200/api/cars', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          brand: brand,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (!carsLoaded) {
        loadCars();
        setCarsLoaded(true);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carsLoaded]),
  );

  return (
    <SafeAreaView style={styles.areaContainer}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.subTitle}>
              Lets find your favorite car here
            </Text>

            <View style={styles.container2}>
              <View style={styles.searchContainer}>
                <View style={styles.searchBox}>
                  <SearchInputBox
                    value={searchInput}
                    KeyBoardType="email"
                    onChangeTextBox={handleInputChange}
                    placeholder="Search for Cars"
                    imageUrl={require('../../assets/icons8-search-96.png')}
                    InputType="default"
                    width={appStyles.screenWidth.width * 0.8}
                    borderWidth={0}
                    backgroundColor={appStyles.cardContainer.color}
                    borderColor={appStyles.cardContainer.color}
                  />
                </View>
                <View style={styles.iconButton}>
                  <IconOnlyButton
                    onPress={onClickFilter}
                    icon={require('../../assets/filter.png')}
                    width={50}
                    backgroundColor={appStyles.main.backgroundColor}
                  />
                </View>
              </View>

              <View style={styles.bannerCard}>
                <View style={styles.bannerContent}>
                  <Text style={styles.bannerCardTitle}>
                    Car Audi R8, tunning
                  </Text>
                  <Text style={styles.bannerSubTitle}>
                    Feel the V10 Roar; Rent the Audi R8
                  </Text>
                  <Text style={styles.bannerCardText}>400$ / DAY</Text>
                </View>

                <View style={styles.bannerImageContainer}>
                  <Image
                    style={styles.bannerImage}
                    source={require('../../assets/hd-orange-audi-r8-car-png-24.png')}
                  />
                </View>
              </View>
            </View>

            <View style={styles.headerContainer}>
              <Text style={styles.heading}>Available Cars</Text>
              <TouchableOpacity onPress={handleViewAllClick}>
                <Text style={styles.view}>View all</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.scrollH}>
              <ScrollView horizontal={true}>
                <View style={styles.brandContainerSet}>
                  {brandsArrayList.map((brand, index) => (
                    <TouchableOpacity
                      style={styles.brandContainer}
                      key={index}
                      onPress={() => getCarsByBrand(brand.name)}>
                      <Image style={styles.brandLogo} source={brand.logoName} />
                      <Text style={styles.brandName}>
                        {capitalizeFirstLetter(brand.name)}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>

            <View style={styles.headerContainer}>
              <Text style={styles.heading}>Top Rated</Text>
              <TouchableOpacity onPress={handleViewAllClick}>
                <Text style={styles.view}>View all</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.carCardContainer}>
            <ScrollView horizontal={true}>
              {cars.map((car, index) => (
                <CarCard
                  key={index}
                  car={car}
                  isFavorite={FavCars.some(favCar => favCar._id === car._id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
              <TouchableOpacity
                style={styles.loadMoreContainer}
                onPress={loadCars}>
                <Text style={styles.loadMore}>Load more</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  areaContainer: {
    flex: 1,
    backgroundColor: appStyles.background.color,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    backgroundColor: appStyles.background.color,
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  searchContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    //
  },
  subTitle: {
    color: appStyles.Text.color,
  },
  bannerSubTitle: {
    color: appStyles.Text.color,
    fontSize: 11,
  },
  bannerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 10,
    width: appStyles.screenWidth.width * 0.95,
    backgroundColor: '#272f3e',
  },
  bannerCardTitle: {
    fontSize: 18,
    color: appStyles.Text.color,
  },
  bannerCardText: {
    color: 'orange',
    fontSize: 20,
    marginTop: 10,
  },
  bannerContent: {
    //
  },
  bannerImage: {
    width: appStyles.screenWidth.width * 0.4,
    height: appStyles.screenHeight.height * 0.11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  heading: {
    fontSize: 16,
    color: appStyles.Text.color,
    fontWeight: 'bold',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  view: {
    color: appStyles.main.backgroundColor,
    fontSize: 17,
  },
  bottomSheet: {
    //
  },
  brandContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 0.5,
    borderColor: appStyles.Text.color,
    width: 90,
    height: 100,
    borderRadius: 10,
  },
  scrollH: {
    height: 130,
  },
  brandContainerSet: {
    marginTop: 10,
    marginBottom: 15,
    flexDirection: 'row',
    gap: 20,
  },
  brandLogo: {
    width: 50,
    height: 50,
  },
  brandName: {
    marginTop: 10,
    color: appStyles.Text.color,
  },
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
    borderWidth: 0.5,
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
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: 'white',
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

export default Home;
