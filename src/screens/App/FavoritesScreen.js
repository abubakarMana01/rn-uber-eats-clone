import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  RefreshControl,
  Text,
  ScrollView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import LottieView from 'lottie-react-native';

import {Loading, Restaurant} from '../../components';
import {AuthContext} from '../../contexts/AuthProvider';

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {user} = useContext(AuthContext);

  const fetchFavoriteRestaurants = () => {
    setIsLoading(true);
    firestore()
      .collection('users')
      .doc(user.uid)
      .collection('favorites')
      .onSnapshot(snapshot => {
        setIsLoading(false);
        setFavorites(snapshot.docs);
      });
  };
  useEffect(() => {
    fetchFavoriteRestaurants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : favorites.length === 0 ? (
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl onRefresh={fetchFavoriteRestaurants} />
          }>
          <View style={styles.noFavoritesContainer}>
            <LottieView
              autoPlay
              loop
              style={styles.lottieAnimation}
              source={require('../../assets/animations/scanner.json')}
            />
            <Text style={styles.noFavoritesText}>
              You have not added any restaurants to favorites
            </Text>
          </View>
        </ScrollView>
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={fetchFavoriteRestaurants}
            />
          }
          ListHeaderComponent={() => (
            <View style={styles.listHeaderComponent} />
          )}
          data={favorites}
          renderItem={({item}) => (
            <Restaurant item={item.data()} showLike={false} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHeaderComponent: {
    height: 15,
  },
  scrollView: {
    flex: 1,
  },
  noFavoritesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  noFavoritesText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Signika-SemiBold',
  },
  lottieAnimation: {
    width: 120,
  },
});
