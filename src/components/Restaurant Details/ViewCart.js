import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../constants';
import {AppContext} from '../../contexts/AppProvider';

export default function ViewCart() {
  const {selectedFoods, setCartTotal, cartTotal, setShowCart} =
    useContext(AppContext);

  const foodPrices = [];
  selectedFoods.forEach(food => {
    foodPrices.push(Number(food.price.split('$')[1]));
  });

  let total = 0;
  for (let i = 0; i < foodPrices.length; i++) {
    total += foodPrices[i];
  }
  total = Math.round((total + Number.EPSILON) * 100) / 100;
  setCartTotal(total);

  return (
    <TouchableOpacity
      style={styles.viewCart}
      activeOpacity={0.7}
      onPress={() => setShowCart(true)}>
      <Text style={styles.viewCartText}>View Cart</Text>
      <Text style={styles.totalPrice}>${cartTotal}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  viewCart: {
    position: 'absolute',
    bottom: 50,
    width: '70%',
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
    fontSize: 16,
    fontFamily: 'Signika-Medium',
  },
  totalPrice: {
    position: 'absolute',
    color: Colors.mediumGrey,
    right: 20,
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Signika-SemiBold',
  },
});
