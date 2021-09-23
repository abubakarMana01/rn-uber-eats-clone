import React, {useState} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

import {HomeHeaderButton, SearchBar, HomeRestaurants} from '../components';
import {Colors} from '../constants';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('Delivery');

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.lightGrey}
        barStyle="dark-content"
        animated
      />
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
      <SearchBar />
      <HomeRestaurants />
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
