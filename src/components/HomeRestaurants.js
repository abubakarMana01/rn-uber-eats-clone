import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import {HomeCategories, Restaurant} from '.';

const restaurants = [
  {
    id: '3',
    name: 'Chicken Capitol',
    imageURL:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1529,
    rating: 4.9,
    favourite: false,
  },
  {
    id: '4',
    name: 'Cilantro',
    imageURL:
      'https://images.unsplash.com/photo-1586999768265-24af89630739?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1014,
    rating: 4.5,
    favourite: true,
  },
  {
    id: '1',
    name: 'Beachside Bar',
    imageURL:
      'https://images.unsplash.com/photo-1482275548304-a58859dc31b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.6,
    favourite: true,
  },
  {
    id: '2',
    name: "India's grill",
    imageURL:
      'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 343,
    rating: 3.7,
    favourite: false,
  },
];

export default function HomeCuisines() {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => <HomeCategories />}
        showsVerticalScrollIndicator={false}
        data={restaurants}
        renderItem={({item}) => <Restaurant item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
