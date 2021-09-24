import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Colors} from '../../constants';
import {AuthContext} from '../../contexts/AuthProvider';

export default function SearchBar({city, setCity}) {
  const authContext = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder={city}
        onPress={(data, details = null) => {
          setCity(data.description.split(',')[0]);
        }}
        query={{
          key: 'AIzaSyA86Ztzw4bOB5xdqy1wXm-nAok8B6MownM',
          language: 'en',
        }}
        renderLeftButton={() => (
          <View style={styles.locationIcon}>
            <Ionicons name="location-sharp" size={24} color={Colors.dark} />
          </View>
        )}
        renderRightButton={() => (
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.rightContainer}
            onPress={authContext.logout}>
            <AntDesign name="clockcircle" size={13} color={Colors.dark} />
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        )}
        styles={{
          textInputContainer: {
            backgroundColor: Colors.lightGrey,
            alignItems: 'center',
            borderRadius: 30,
            paddingRight: 12,
          },
          textInput: {
            height: 50,
            color: '#5d5d5d',
            fontSize: 16,
            fontWeight: '700',
            backgroundColor: Colors.lightGrey,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      />

      <MaterialCommunityIcons
        name="filter"
        size={30}
        style={styles.rightIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.light,
    paddingLeft: 10,
    paddingBottom: 2,
  },
  locationIcon: {
    marginLeft: 10,
  },
  rightContainer: {
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: Colors.light,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    marginLeft: 6,
  },
  rightIcon: {
    marginLeft: 5,
    top: 10,
    left: -3,
  },
});
