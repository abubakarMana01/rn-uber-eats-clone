import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {Colors} from '../../constants';
import {AppContext} from '../../contexts/AppProvider';

const foods = [
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  },
  {
    title: 'Tandoori Chicken',
    description:
      'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    price: '$19.20',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
  },
  {
    title: 'Chilaquiles',
    description:
      'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
    price: '$14.50',
    image:
      'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
  },
  {
    title: 'Chicken Caesar Salad',
    description:
      'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
    price: '$21.50',
    image:
      'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
  },
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
  },
];

export default function MenuItems() {
  const {selectedFoods, setSelectedFoods} = useContext(AppContext);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        // eslint-disable-next-line react-native/no-inline-styles
        ListHeaderComponent={() => <View style={{height: 10}} />}
        data={foods}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <BouncyCheckbox
              size={22}
              fillColor="green"
              unfillColor="#FFFFFF"
              // eslint-disable-next-line react-native/no-inline-styles
              iconStyle={{borderColor: 'green', borderRadius: 0}}
              onPress={isChecked => {
                if (isChecked) {
                  setSelectedFoods([
                    ...selectedFoods,
                    {
                      title: item.title,
                      description: item.description,
                      price: item.price,
                      image: item.image,
                    },
                  ]);
                } else {
                  setSelectedFoods(
                    selectedFoods.filter(food => food.title !== item.title),
                  );
                }
              }}
            />
            <View style={styles.foodInfoContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>

            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: item.image}} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuItem: {
    backgroundColor: Colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 140,
    paddingVertical: 10,
    paddingLeft: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 7,
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    overflow: 'hidden',
  },
  foodInfoContainer: {
    width: '65%',
  },
  imageContainer: {
    width: 80,
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
    fontWeight: '700',
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: Colors.dark,
    marginVertical: 10,
  },
  price: {
    fontSize: 14,
    color: Colors.dark,
    opacity: 0.7,
    fontWeight: '600',
  },
});
