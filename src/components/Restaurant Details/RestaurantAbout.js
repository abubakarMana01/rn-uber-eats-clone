import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../constants';

export default function RestaurantAbout({data}) {
  const formattedCategories = data.categories
    .map(item => item.title)
    .join(' • ');

  const description = `${formattedCategories} ${
    data.price ? ' • ' + data.price : ''
  } • 🎫 • ${data.rating} ⭐ (${data.review_count}+)`;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: data.image_url}} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.top}>
          <Text style={styles.title}>{data.name}</Text>

          <View style={styles.restaurantStatusContainer}>
            {!data.is_closed ? (
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
                {color: data.is_closed ? 'red' : 'green'},
              ]}>
              {data.is_closed ? 'Closed' : 'Opened'}
            </Text>
          </View>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
      {/* <Text>{data.location.display_address.join(', ')}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.mediumGrey,
    borderBottomWidth: 2,
  },
  imageContainer: {
    height: Dimensions.get('window').height * 0.25,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Signika-SemiBold',
  },
  bottomContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  description: {
    marginTop: 5,
    fontSize: 15,
    fontFamily: 'Signika-Regular',
    color: Colors.darkGrey,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  restaurantStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantStatus: {
    fontSize: 14,
    marginLeft: 5,
    fontFamily: 'Signika-Medium',
  },
});
