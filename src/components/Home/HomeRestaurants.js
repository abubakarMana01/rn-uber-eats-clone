import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';

import {Loading, Restaurant} from '../index';
import {AppContext} from '../../contexts/AppProvider';

export default function HomeRestaurants({city}) {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  const {activeTab} = useContext(AppContext);

  const YELP_API_KEY =
    'h08xS0pq9u-9NomJmrk342MM46lz5WFrpib2i-XLN4ITi4xru99FE2YAivMCeLBZ-Dy5bCeUp3GS-BcevlzFeU9qi2gmqa3N2hIkq2cSq6yfhSIIKuavZr0ai1BMYXYx';

  useEffect(() => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    setLoading(true);
    fetch(yelpUrl, {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setRestaurants(
          data.businesses.filter(business =>
            business.transactions.includes(activeTab.toLowerCase()),
          ),
        );

        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log(err.message);
      });
  }, [city, activeTab]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : restaurants.length === 0 ? (
        <View style={styles.noRestaurantsContainer}>
          <Text style={styles.noRestaurantsText}>
            Sorry, no restaurants in this city offer {activeTab.toLowerCase()}{' '}
            services at the moment
          </Text>
        </View>
      ) : (
        <FlatList
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
