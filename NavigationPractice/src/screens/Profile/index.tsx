import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';

const Profile = ({ navigation }) => {
  const [formValues, setFormValues] = React.useState({
    fullname: '',
    email: '',
    age: '',
    phoneNumber: '',
  });

  const formInputs = [
    {
      label: 'Fullname',
      name: 'fullname',
      placeholder: 'Fullname',
      value: formValues.fullname,
    },
    {
      label: 'Email',
      name: 'email',
      placeholder: 'Email',
      value: formValues.email,
    },
    {
      label: 'Age',
      name: 'age',
      placeholder: 'Age',
      value: formValues.age,
    },
    {
      label: 'Phone Number',
      name: 'phoneNumber',
      placeholder: 'Phone Number',
      value: formValues.phoneNumber,
    },
  ];

  const handleChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <View style={styles.form_container}>
      {formInputs.map((input, index) => (
        <CustomInput
          key={index}
          label={input.label}
          value={input.value}
          onChangeText={(text) => handleChange(input.name, text)}
          placeholder={input.placeholder}
        />
      ))}
      <Button
        title="Gönder"
        onPress={() =>
          navigation.navigate('ProfileDetail', {
            formValues: formValues,
          })
        }
      />

      {/* <Button
          title="Go to Detail"
          onPress={() => navigation.navigate('Detail')}
        /> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  form_container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    padding: 16,
  },
});
