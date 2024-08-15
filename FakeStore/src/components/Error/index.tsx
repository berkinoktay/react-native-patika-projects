import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Error = () => {
  return (
    <LottieView
      source={require('../../assets/errorAnimation.json')}
      style={{ width: '100%', height: '100%' }}
      autoPlay
      loop
    />
  );
};

export default Error;

const styles = StyleSheet.create({});
