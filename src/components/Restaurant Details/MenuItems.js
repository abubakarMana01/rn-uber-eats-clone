import React, {useContext} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {ViewCart} from '..';
import {Colors} from '../../constants';
import {AppContext} from '../../contexts/AppProvider';

const foods = [
  {
    id: '1',
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  },
  {
    id: '2',
    title: 'Tandoori Chicken',
    description:
      'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    price: '$19.20',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
  },
  {
    id: '3',
    title: 'Chilaquiles',
    description:
      'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
    price: '$14.50',
    image:
      'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
  },
  {
    id: '4',
    title: 'Chicken Caesar Salad',
    description:
      'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
    price: '$21.50',
    image:
      'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
  },
  {
    id: '5',
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
  },
];

export default function MenuItems({data}) {
  const {selectedFoods, setSelectedFoods} = useContext(AppContext);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        // eslint-disable-next-line react-native/no-inline-styles
        ListHeaderComponent={() => <View style={{height: 10}} />}
        data={foods}
        renderItem={({item}) => (
          <View style={styles.menuItem} activeOpacity={0.7}>
            <BouncyCheckbox
              size={22}
              fillColor="green"
              unfillColor="#FFFFFF"
              iconStyle={styles.bouncyCheckbox}
              onPress={isChecked => {
                if (isChecked) {
                  setSelectedFoods([
                    ...selectedFoods,
                    {
                      id: item.id,
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
              <Text numberOfLines={3} style={styles.description}>
                {item.description}
              </Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>

            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: item.image}} />
            </View>
          </View>
        )}
      />
      <ViewCart data={data} foods={foods} />
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
    marginVertical: 20,
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
    flex: 0.7,
  },
  imageContainer: {
    maxWidth: 100,
    flex: 0.3,
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
  bouncyCheckbox: {
    borderColor: 'green',
    borderRadius: 0,
  },
});
