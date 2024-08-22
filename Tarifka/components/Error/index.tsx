import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Error = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#800000' }}>
        Something went wrong!
      </Text>
      <LottieView
        source={require('../../assets/lottie/errorAnimation.json')}
        style={{
          width: 300,
          height: 300,
        }}
        autoPlay
        loop
      />
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({});
