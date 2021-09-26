import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  RefreshControl,
  ScrollView,
} from 'react-native';
import LottieView from 'lottie-react-native';

import {Loading, Restaurant} from '../';
import {AppContext} from '../../contexts/AppProvider';

export default function HomeRestaurants({city}) {
  const {activeTab} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'Sorry, no restaurants in this city offer ' +
      activeTab.toLowerCase() +
      ' services at the moment',
  );

  const YELP_API_KEY =
    'h08xS0pq9u-9NomJmrk342MM46lz5WFrpib2i-XLN4ITi4xru99FE2YAivMCeLBZ-Dy5bCeUp3GS-BcevlzFeU9qi2gmqa3N2hIkq2cSq6yfhSIIKuavZr0ai1BMYXYx';

  const fetchRestaurants = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    setLoading(true);
    setRestaurants([]);
    fetch(yelpUrl, {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (!data.businesses) {
          setLoading(false);
          return setRestaurants([]);
        }
        setRestaurants(
          data.businesses.filter(business =>
            business.transactions.includes(activeTab.toLowerCase()),
          ),
        );

        setLoading(false);
      })
      .catch(err => {
        setErrorMessage(
          'Unable to find restaurants at the moment. Please check your internet connectivity',
        );
        setLoading(false);
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchRestaurants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, activeTab]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : restaurants.length === 0 ? (
        <View style={styles.scrollViewContainer}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={fetchRestaurants}
              />
            }
            // eslint-disable-next-line react-native/no-inline-styles
            contentContainerStyle={{flex: 1}}>
            <View style={styles.noRestaurantsContainer}>
              <LottieView
                // eslint-disable-next-line react-native/no-inline-styles
                style={{width: 100}}
                source={require('../../assets/animations/scanner.json')}
                autoPlay
                loop
              />
              <Text style={styles.noRestaurantsText}>{errorMessage}</Text>
            </View>
          </ScrollView>
        </View>
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={fetchRestaurants}
            />
          }
          showsVerticalScrollIndicator={false}
          data={restaurants}
          renderItem={({item}) => <Restaurant item={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1,
  },
  noRestaurantsContainer: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noRestaurantsText: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Signika-SemiBold',
  },
});
