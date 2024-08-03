import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Home = ({ navigation }: any) => {
  return (
    <View>
      <Button
        title="Home Categories"
        onPress={() => navigation.navigate('HomeCategories')}
      />

      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
