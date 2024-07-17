import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

interface SearchbarProps {
  onchangeText: (text: string) => void;
}

const Searchbar = (props: SearchbarProps) => {
  return (
    <View style={styles.input_container}>
      <TextInput
        style={styles.search_input}
        placeholder='Arayınız..'
        onChangeText={props.onchangeText}
        clearButtonMode='always'
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
  },
  search_input: {
    flex: 1,
    fontSize: 16,
  },
});
