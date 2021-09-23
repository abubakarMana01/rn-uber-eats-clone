import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Colors} from '../constants';

export default function Restaurant({item}) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.restaurantContainer}>
      <View style={styles.imageContainer}>
        <ImageBackground
          resizeMode="cover"
          source={{
            uri: item.imageURL,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>30-45 . min</Text>
        </View>

        <View style={styles.bottomRight}>
          <TouchableOpacity
            style={styles.favouriteIcon}
            onPress={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <FontAwesome name="heart" size={27} color="red" />
            ) : (
              <FontAwesome name="heart-o" size={27} color={Colors.dark} />
            )}
          </TouchableOpacity>

          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  restaurantContainer: {
    backgroundColor: Colors.light,
    marginBottom: 30,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 3,
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  imageContainer: {
    height: 180,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    // borderRadius: 3,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
  },
  time: {
    fontWeight: '400',
    color: Colors.darkGrey,
    fontSize: 13,
  },
  ratingContainer: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: Colors.lightGrey,
    marginHorizontal: 10,
  },
  rating: {
    fontWeight: '500',
    fontSize: 14,
  },
  favouriteIcon: {},
  bottomRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
