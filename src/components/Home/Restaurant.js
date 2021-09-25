import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../constants';

export default function Restaurant({item}) {
  const navigation = useNavigation();

  const [isLiked, setIsLiked] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.restaurantContainer}
      onPress={() => navigation.navigate('Restaurant Details', {item})}>
      <View style={styles.imageContainer}>
        <ImageBackground
          resizeMode="cover"
          source={{
            uri: item.image_url,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.review}>{item.review_count} reviews</Text>
          <View style={styles.restaurantStatusContainer}>
            {!item.is_closed ? (
              <FontAwesome name="check-circle-o" size={20} color="green" />
            ) : (
              <MaterialCommunityIcons
                name="close-circle"
                size={20}
                color="red"
              />
            )}
            <Text
              style={[
                styles.restaurantStatus,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  color: item.is_closed ? 'red' : 'green',
                },
              ]}>
              {item.is_closed ? 'Closed' : 'Opened'}
            </Text>
          </View>
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
    backgroundColor: Colors.lightGrey,
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
    fontFamily: 'Signika-SemiBold',
    fontSize: 17,
    maxWidth: Dimensions.get('window').width * 0.65,
  },
  review: {
    fontWeight: '400',
    fontFamily: 'Signika-Regular',
    color: Colors.darkGrey,
    fontSize: 13,
  },
  restaurantStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantStatus: {
    fontWeight: '600',
    fontFamily: 'Signika-Medium',
    fontSize: 14,
    marginLeft: 5,
  },
  ratingContainer: {
    borderRadius: 15,
    backgroundColor: Colors.lightGrey,
    marginHorizontal: 10,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    fontWeight: '500',
    fontSize: 14,
    fontFamily: 'Signika-Medium',
  },
  favouriteIcon: {},
  bottomRight: {
    flexDirection: 'row',
  },
});
