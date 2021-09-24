import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Colors} from '../../constants';
import {AppContext} from '../../contexts/AppProvider';

export default function ViewCart() {
  const {selectedFoods} = useContext(AppContext);

  const foodPrices = [];
  selectedFoods.forEach(food => {
    foodPrices.push(Number(food.price.split('$')[1]));
  });

  let total = 0;
  for (let i = 0; i < foodPrices.length; i++) {
    total += foodPrices[i];
  }
  total = Math.round((total + Number.EPSILON) * 100) / 100;

  return (
    <TouchableOpacity style={styles.viewCart} activeOpacity={0.3}>
      <Text style={styles.viewCartText}>View Cart</Text>
      <Text style={styles.totalPrice}>${total}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  viewCart: {
    position: 'absolute',
    bottom: 70,
    width: '85%',
    maxWidth: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.dark,
    borderRadius: 30,
    alignSelf: 'center',
  },
  viewCartText: {
    color: Colors.light,
    fontSize: 18,
  },
  totalPrice: {
    position: 'absolute',
    color: Colors.mediumGrey,
    right: 20,
    fontWeight: '600',
  },
});
