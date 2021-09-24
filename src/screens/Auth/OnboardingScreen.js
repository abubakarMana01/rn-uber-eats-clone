/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {Colors} from '../../constants';

export default function OnboardingScreen({navigation}) {
  return (
    <Onboarding
      onSkip={() => navigation.replace('ChooseAuth Screen')}
      onDone={() => navigation.navigate('ChooseAuth Screen')}
      showSkip={false}
      NextButtonComponent={({onPress}) => {
        return (
          <SimpleLineIcons
            name="arrow-right-circle"
            size={40}
            color="green"
            onPress={onPress}
            style={{marginHorizontal: 20}}
          />
        );
      }}
      titleStyles={{
        fontSize: 32,
        fontFamily: 'Signika-Bold',
      }}
      subTitleStyles={{
        fontSize: 16,
        fontFamily: 'Signika-Medium',
      }}
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
  );
}
