/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Image, StatusBar} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {Colors} from '../../constants';

export default function OnboardingScreen({navigation}) {
  return (
    <>
      <StatusBar backgroundColor={Colors.lightGrey} />
      <Onboarding
        onSkip={() => navigation.replace('ChooseAuth Screen')}
        onDone={() => navigation.navigate('ChooseAuth Screen')}
        titleStyles={{fontWeight: '700', fontSize: 32}}
        subTitleStyles={{fontWeight: '400', fontSize: 16}}
        bottomBarColor={Colors.lightGrey}
        pages={[
          {
            backgroundColor: '#eee',
            image: (
              <Image source={require('../../assets/images/onboarding1.png')} />
            ),
            title: 'Experience the power of E-commerce',
            subtitle: 'Get your meals just in time for lunch',
          },
          {
            backgroundColor: '#eee',
            image: (
              <Image
                resizeMode="contain"
                source={require('../../assets/images/onboarding2.png')}
              />
            ),
            title: 'Comfort',
            subtitle:
              'Get your meals from the comfort of your home with a few taps on your mobile',
          },
          {
            backgroundColor: '#eee',
            image: (
              <Image source={require('../../assets/images/onboarding3.png')} />
            ),
            title: 'What more could anyone ask for??',
            subtitle: "Let's get started",
          },
        ]}
      />
    </>
  );
}

const styles = StyleSheet.create({});
