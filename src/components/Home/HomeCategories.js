import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Colors} from '../../constants';

const categories = [
  {
    id: '1',
    title: 'Pick-up',
    image: require('../../assets/images/shopping-bag.png'),
  },
  {
    id: '2',
    title: 'Fast foods',
    image: require('../../assets/images/fast-food.png'),
  },
  {
    id: '3',
    title: 'Bakery Items',
    image: require('../../assets/images/bread.png'),
  },
  {
    id: '4',
    title: 'Coffee',
    image: require('../../assets/images/coffee.png'),
  },
  {
    id: '5',
    title: 'Soft drinks',
    image: require('../../assets/images/soft-drink.png'),
  },
  {
    id: '6',
    title: 'Desserts',
    image: require('../../assets/images/desserts.png'),
  },
  {
    id: '7',
    title: 'Deals',
    image: require('../../assets/images/deals.png'),
  },
];

export default function HomeCategories() {
  return (
    <View style={styles.container}>
      <FlatList
        // eslint-disable-next-line react-native/no-inline-styles
        ListHeaderComponent={() => <View style={{width: 10}} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.itemContainer} activeOpacity={0.3}>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: Colors.light,
    marginTop: 5,
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 10,
    flexDirection: 'row',
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  image: {
    height: 35,
    width: 25,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Signika-SemiBold',
    marginLeft: 5,
  },
});
