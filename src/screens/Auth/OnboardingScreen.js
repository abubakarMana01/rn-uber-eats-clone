import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {Colors} from '../../constants';

export default function OnboardingScreen({navigation}) {
  // return (
  //   <Onboarding
  //     onSkip={() => navigation.replace('ChooseAuth Screen')}
  //     onDone={() => navigation.navigate('ChooseAuth Screen')}
  //     showSkip={false}
  //     NextButtonComponent={({onPress}) => {
  //       return (
  //         <SimpleLineIcons
  //           name="arrow-right-circle"
  //           size={40}
  //           color="green"
  //           onPress={onPress}
  //           style={{marginHorizontal: 20}}
  //         />
  //       );
  //     }}
  //     // eslint-disable-next-line react-native/no-inline-styles
  //     titleStyles={{
  //       fontSize: 32,
  //       fontFamily: 'Signika-Bold',
  //     }}
  //     // eslint-disable-next-line react-native/no-inline-styles
  //     subTitleStyles={{
  //       fontSize: 16,
  //       fontFamily: 'Signika-Medium',
  //     }}
  //     bottomBarColor={Colors.lightGrey}
  //     pages={[
  //       {
  //         backgroundColor: '#eee',
  //         image: (
  //           <Image source={require('../../assets/images/onboarding1.png')} />
  //         ),
  //         title: 'Experience the power of E-commerce',
  //         subtitle: 'Get your meals just in time for lunch',
  //       },
  //       {
  //         backgroundColor: '#eee',
  //         image: (
  //           <Image
  //             resizeMode="contain"
  //             source={require('../../assets/images/onboarding2.png')}
  //           />
  //         ),
  //         title: 'Comfort',
  //         subtitle:
  //           'Get your meals from the comfort of your home with a few taps on your mobile',
  //       },
  //       {
  //         backgroundColor: '#eee',
  //         image: (
  //           <Image source={require('../../assets/images/onboarding3.png')} />
  //         ),
  //         title: 'What more could anyone ask for??',
  //         subtitle: "Let's get started",
  //       },
  //     ]}
  //   />
  // );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#00ab8c" animated barStyle="light-content" />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Experience the power of E-commerce
          </Text>
          <Text style={styles.subHeader}>
            Get your meals from the comfort of your home with a few taps on your
            mobile
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('ChooseAuth Screen')}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Get started</Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color={Colors.light}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green,
  },
  logoContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  main: {
    backgroundColor: Colors.light,
    flex: 0.4,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  header: {
    padding: 30,
  },
  headerText: {
    fontSize: 28,
    fontFamily: 'Signika-SemiBold',
    color: Colors.dark,
  },
  subHeader: {
    fontSize: 16,
    fontFamily: 'Signika-Regular',
    marginTop: 10,
    color: Colors.darkGrey,
  },
  buttonContainer: {
    width: 150,
    height: 40,
    backgroundColor: Colors.green,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: Colors.light,
    fontFamily: 'Signika-SemiBold',
    fontSize: 16,
  },
});

// return (
//   <Onboarding
//     onSkip={() => navigation.replace('ChooseAuth Screen')}
//     onDone={() => navigation.navigate('ChooseAuth Screen')}
//     showSkip={false}
//     NextButtonComponent={({onPress}) => {
//       return (
//         <SimpleLineIcons
//           name="arrow-right-circle"
//           size={40}
//           color="green"
//           onPress={onPress}
//           style={{marginHorizontal: 20}}
//         />
//       );
//     }}
//     titleStyles={{
//       fontSize: 32,
//       fontFamily: 'Signika-Bold',
//     }}
//     subTitleStyles={{
//       fontSize: 16,
//       fontFamily: 'Signika-Medium',
//     }}
//     bottomBarColor={Colors.lightGrey}
//     pages={[
//       {
//         backgroundColor: '#eee',
//         image: (
//           <Image source={require('../../assets/images/onboarding1.png')} />
//         ),
//         title: 'Experience the power of E-commerce',
//         subtitle: 'Get your meals just in time for lunch',
//       },
//       {
//         backgroundColor: '#eee',
//         image: (
//           <Image
//             resizeMode="contain"
//             source={require('../../assets/images/onboarding2.png')}
//           />
//         ),
//         title: 'Comfort',
//         subtitle:
//           'Get your meals from the comfort of your home with a few taps on your mobile',
//       },
//       {
//         backgroundColor: '#eee',
//         image: (
//           <Image source={require('../../assets/images/onboarding3.png')} />
//         ),
//         title: 'What more could anyone ask for??',
//         subtitle: "Let's get started",
//       },
//     ]}
//   />
// );
