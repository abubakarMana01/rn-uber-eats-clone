import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';

import {Colors} from '../../constants';
import {AppContext} from '../../contexts/AppProvider';

export default function CheckoutScreen({route, navigation}) {
  const {cartTotal, selectedFoods} = useContext(AppContext);
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible}>
        <View style={styles.modalContainer}>
          <LottieView
            autoSize
            loop={false}
            source={require('../../assets/animations/check-mark.json')}
            onAnimationFinish={() => setModalVisible(false)}
            autoPlay
          />
        </View>
      </Modal>

      <View style={styles.header}>
        <Text style={styles.headerText}>
          Your order at {route.params.data.name} has been placed for $
          {cartTotal} 🚀
        </Text>
      </View>

      <FlatList
        data={selectedFoods}
        ListFooterComponent={() => (
          <View style={styles.lottieBottom}>
            <LottieView
              autoSize
              style={styles.lottie}
              loop={false}
              source={require('../../assets/animations/cooking.json')}
              onAnimationFinish={() => setModalVisible(false)}
              autoPlay
            />
            <TouchableOpacity
              disabled={selectedFoods.length === 0}
              style={styles.backToHome}
              activeOpacity={0.5}
              onPress={() => navigation.replace('Main')}>
              <Text style={styles.backToHomeText}>Back to home</Text>
            </TouchableOpacity>
          </View>
        )}
        renderItem={({item}) => (
          <View style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.foodInfoContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>

            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: item.image}} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 20,
  },
  headerText: {
    fontFamily: 'Signika-SemiBold',
    fontSize: 22,
    marginBottom: 0,
  },
  menuItem: {
    backgroundColor: Colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 140,
    paddingVertical: 10,
    paddingLeft: 20,
    marginVertical: 15,
    marginHorizontal: 20,
    borderRadius: 7,
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.9)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    overflow: 'hidden',
  },
  foodInfoContainer: {
    flex: 0.65,
  },
  imageContainer: {
    flex: 0.3,
    maxWidth: 100,
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'Signika-SemiBold',
    fontSize: 17,
  },
  description: {
    fontFamily: 'Signika-Regular',
    fontSize: 14,
    marginVertical: 10,
    color: Colors.darkGrey,
  },
  price: {
    fontSize: 14,
    color: Colors.darkGrey,
    opacity: 0.7,
    fontFamily: 'Signika-SemiBold',
  },
  lottie: {
    width: 150,
    marginBottom: 30,
  },
  lottieBottom: {
    marginVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backToHome: {
    width: '100%',
    maxWidth: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.dark,
    borderRadius: 30,
    alignSelf: 'center',
  },
  backToHomeText: {
    color: Colors.light,
    fontSize: 16,
    fontFamily: 'Signika-Medium',
  },
});
