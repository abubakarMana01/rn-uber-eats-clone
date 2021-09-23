import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Colors} from '../constants';

const categories = [
  {
    id: '1',
    title: 'Pick-up',
    image: require('../assets/images/shopping-bag.png'),
  },
  {
    id: '2',
    title: 'Fast foods',
    image: require('../assets/images/fast-food.png'),
  },
  {
    id: '3',
    title: 'Bakery Items',
    image: require('../assets/images/bread.png'),
  },
  {
    id: '4',
    title: 'Coffee',
    image: require('../assets/images/coffee.png'),
  },
  {
    id: '5',
    title: 'Soft drinks',
    image: require('../assets/images/soft-drink.png'),
  },
  {
    id: '6',
    title: 'Desserts',
    image: require('../assets/images/desserts.png'),
  },
  {
    id: '7',
    title: 'Deals',
    image: require('../assets/images/deals.png'),
  },
];

export default function HomeCategories() {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => <View style={{width: 20}} />}
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
    marginBottom: 15,
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 25,
  },
  image: {
    height: 50,
    width: 40,
    resizeMode: 'contain',
  },
  text: {
    fontWeight: '700',
    fontSize: 14,
  },
});
