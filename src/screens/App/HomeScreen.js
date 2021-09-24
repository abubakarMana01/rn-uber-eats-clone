import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {
  HomeHeaderButton,
  SearchBar,
  HomeRestaurants,
  HomeCategories,
} from '../../components';
import {Colors} from '../../constants';
import {AppContext} from '../../contexts/AppProvider';

export default function HomeScreen() {
  const {activeTab, setActiveTab, city, setCity} = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logisticMethodContainer}>
          <HomeHeaderButton
            text="Delivery"
            btnColor={Colors.dark}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <HomeHeaderButton
            text="Pickup"
            btnColor={Colors.light}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </View>
      </View>
      <SearchBar setCity={setCity} city={city} />
      <HomeCategories />
      <HomeRestaurants setCity={setCity} city={city} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  headerContainer: {
    backgroundColor: Colors.light,
    width: '100%',
    paddingTop: 20,
    paddingBottom: 15,
  },
  logisticMethodContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
