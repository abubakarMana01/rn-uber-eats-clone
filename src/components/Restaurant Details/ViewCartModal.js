import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Loading} from '../../components';
import {Colors} from '../../constants';
import {AppContext} from '../../contexts/AppProvider';

export default function ViewCartModal({data}) {
  const {cartTotal, showCart, setShowCart, selectedFoods} =
    useContext(AppContext);

  const navigation = useNavigation();

  return (
    <Modal visible={showCart} transparent animationType="slide">
      <View style={styles.background}>
        <TouchableWithoutFeedback onPress={() => setShowCart(false)}>
          <View style={styles.topEmptyContainer} />
        </TouchableWithoutFeedback>
        <View style={styles.container}>
          <Text style={styles.title}>{data.name}</Text>

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

          <View style={styles.subTotalContainer}>
            <Text style={styles.subTotalText}>Subtotal</Text>
            <Text style={styles.subTotalPrice}>${cartTotal}</Text>
          </View>

          <TouchableOpacity
            style={styles.viewCart}
            activeOpacity={0.5}
            onPress={() => {
              setShowCart(false);
              return (
                <Loading onFinish={navigation.navigate('Checkout', {data})} />
              );
            }}>
            <Text style={styles.viewCartText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'flex-end',
  },
  container: {
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
