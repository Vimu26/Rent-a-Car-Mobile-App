import React, {useCallback, useEffect, useState} from 'react';
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
import {useSelector} from 'react-redux';
import {IUser} from '../../interfaces/user';
import CarCard from '../../components/cards/CarRating.card';
import axios from 'axios';
import {CAR_BRANDS} from '../../types/types';
import {useFocusEffect} from '@react-navigation/native';

export interface ITopRatedCars {
  _id: string;
  brand: CAR_BRANDS;
  car_name: string;
  price_per_day: number;
  rate: number;
}

const Home = ({navigation}: any) => {
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState<ITopRatedCars[]>([]);
  const [pageN, setPage] = useState(1);

  // const token: string = useSelector((state: any) => state.auth.token);
  const user: IUser = useSelector((state: any) => state.auth.user);

  const brandsArrayList = [
    {
      logoName: require('../../assets//brands/icons8-bmw-96.png'),
      name: 'BMW',
    },
    {
      logoName: require('../../assets/brands/icons8-porsche-96.png'),
      name: 'Porsche',
    },
    {
      logoName: require('../../assets/brands/icons8-mercedes-benz-96.png'),
      name: 'Mercedes',
    },
    {
      logoName: require('../../assets/brands/icons8-ford-96.png'),
      name: 'Ford',
    },
    {
      logoName: require('../../assets/brands/icons8-audi-a-german-automobile-manufacturer-of-luxury-vehicles-96.png'),
      name: 'Audi',
    },
    {
      logoName: require('../../assets/brands/icons8-nissan-96.png'),
      name: 'Nissan',
    },
    {
      logoName: require('../../assets/brands/icons8-toyota-96.png'),
      name: 'Toyota',
    },
    {
      logoName: require('../../assets/brands/icons8-honda-96.png'),
      name: 'Honda',
    },
    {
      logoName: require('../../assets/brands/icons8-mitsubishi-96.png'),
      name: 'Mitsubishi',
    },
    {
      logoName: require('../../assets/brands/icons8-mazda-96.png'),
      name: 'Mazda',
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

  const loadCars = async (reset = false) => {
    if (reset) {
      setCars([]);
      setPage(1);
    }

    try {
      const newCars = await getTopRatedCars(reset ? 1 : pageN, 10);
      if (newCars) {
        setCars(prevCars => [...(reset ? [] : prevCars), ...newCars]);
        setPage(prevPage => prevPage + 1);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadCars(true);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  useEffect(() => {
    loadCars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                    width={270}
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
                    <TouchableOpacity style={styles.brandContainer} key={index}>
                      <Image style={styles.brandLogo} source={brand.logoName} />
                      <Text style={styles.brandName}>{brand.name}</Text>
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
              {cars.map((car, i) => (
                <CarCard key={i} car={car} />
              ))}
              <TouchableOpacity
                style={styles.loadMoreContainer}
                onPress={() => loadCars(false)}>
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
    gap: 5,
    paddingVertical: 10,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 10,
    width: 330,
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
    maxWidth: 130,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center', // Center the car cards horizontally
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
    // marginVertical: 20,
    margin: 'auto',
  },
  loadMore: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default Home;
