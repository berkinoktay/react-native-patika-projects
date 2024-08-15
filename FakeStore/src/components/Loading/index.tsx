import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <LottieView
      source={require('../../assets/loadingAnimation.json')}
      style={{ width: '100%', height: '100%' }}
      autoPlay
      loop
    />
  );
};

export default Loading;

const styles = StyleSheet.create({});
