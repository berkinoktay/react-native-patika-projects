import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ProfileDetail = ({ route }: any) => {
  const { fullname, email, age, phoneNumber } = route.params.formValues;
  return (
    <View>
      <Text>Fullname: {fullname}</Text>
      <Text>Email: {email}</Text>
      <Text>Age: {age}</Text>
      <Text>Phone Number: {phoneNumber}</Text>
    </View>
  );
};

export default ProfileDetail;

const styles = StyleSheet.create({});
