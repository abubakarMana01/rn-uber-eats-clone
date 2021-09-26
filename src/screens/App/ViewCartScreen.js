import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Loading} from '../../components';
import {Colors} from '../../constants';
import {AppContext} from '../../contexts/AppProvider';

export default function ViewCartScreen({route}) {
  const navigation = useNavigation();
  const {data} = route.params;

  const {cartTotal, selectedFoods} = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <TouchableWithoutFeedback>
          <View style={styles.topEmptyContainer} />
        </TouchableWithoutFeedback>
        <View style={styles.listContainer}>
          <Text style={styles.title}>{data.name}</Text>

          {selectedFoods.length === 0 ? (
            <Text style={styles.noSelectionText}>
              You have not selected any food. Please select at least one before
              you can checkout
            </Text>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              ListFooterComponent={() => <></>}
              ItemSeparatorComponent={() => (
                <View style={styles.flatListItemSeparator} />
              )}
              data={selectedFoods}
              renderItem={({item}) => (
                <View style={styles.foodContainer}>
                  <Text style={styles.foodName}>{item.title}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              )}
            />
          )}

          <View style={styles.subTotalContainer}>
            <Text style={styles.subTotalText}>Subtotal</Text>
            <Text style={styles.subTotalPrice}>${cartTotal}</Text>
          </View>

          <TouchableOpacity
            style={styles.viewCart}
            activeOpacity={0.5}
            onPress={() => {
              return (
                <Loading onFinish={navigation.navigate('Checkout', {data})} />
              );
            }}>
            <Text style={styles.viewCartText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'flex-end',
  },
  listContainer: {
    flex: 0.6,
    backgroundColor: Colors.lightGrey,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Signika-SemiBold',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  viewCart: {
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

  noSelectionText: {
    alignSelf: 'center',
    fontFamily: 'Signika-Medium',
    textAlign: 'center',
    fontSize: 18,
    flex: 1,
  },

  foodContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foodName: {
    fontSize: 16,
    fontFamily: 'Signika-Regular',
  },
  price: {
    fontSize: 14,
    color: Colors.darkGrey,
    fontFamily: 'Signika-Medium',
  },

  subTotalContainer: {
    alignSelf: 'center',
    padding: 10,
    width: 200,
    borderColor: Colors.dark,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10,
  },
  subTotalText: {
    fontFamily: 'Signika-Bold',
    fontSize: 16,
    color: Colors.darkGrey,
  },
  subTotalPrice: {
    fontFamily: 'Signika-Bold',
    fontSize: 16,
    color: Colors.darkGrey,
  },
  flatListItemSeparator: {
    height: 1,
    backgroundColor: Colors.mediumGrey,
  },

  topEmptyContainer: {flex: 0.4},
});
