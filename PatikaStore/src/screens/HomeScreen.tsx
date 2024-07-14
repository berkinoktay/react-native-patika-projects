import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';

import ProductItem, {type ProductItemProps} from '../components/ProductItem';
import productsData from '../data/products.json';
const height = Dimensions.get('window').height;
const HomeScreen = () => {
  const [searchText, setSearchText] = React.useState('');

  const [filteredProducts, setFilteredProducts] =
    React.useState<Omit<ProductItemProps, 'index' | 'productsLength' | 'id'>[]>(
      productsData,
    );

  useEffect(() => {
    const resultFilteredProducts = productsData.filter(product =>
      product.title.toLowerCase().includes(searchText.toLowerCase() || ''),
    );
    setFilteredProducts(resultFilteredProducts);
  }, [searchText]);

  const renderProductItem = ({
    item,
    index,
  }: {
    item: ProductItemProps;
    index: number;
  }): React.JSX.Element => (
    <ProductItem
      {...item}
      productsLength={filteredProducts.length}
      index={index}
    />
  );

  const renderListEmptyComponent = () => (
    <View style={styles.empty_container}>
      <Icon name="frown" size={60} color={'#a9a9a9'} />
      <Text style={styles.empty_title}>Aradığınız ürün bulunamadı.</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.page_title}>PATIKASTORE</Text>
        <View style={styles.input_container}>
          <Icon
            name="search"
            size={16}
            color={searchText ? 'black' : '#c9c9c9'}
          />
          <TextInput
            style={styles.search_input}
            placeholder="Arayınız.."
            value={searchText}
            onChangeText={setSearchText}
            clearButtonMode="always"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </View>
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProductItem}
        columnWrapperStyle={{gap: 10, justifyContent: 'space-between'}}
        contentContainerStyle={{gap: 10}}
        numColumns={2}
        ListEmptyComponent={renderListEmptyComponent}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
  },
  wrapper: {
    paddingBottom: 10,
  },
  page_title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
    gap: 10,
  },
  search_input: {
    flex: 1,
    fontSize: 16,
  },
  empty_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  empty_title: {
    fontSize: 16,
    color: '#a9a9a9',
    fontWeight: 'bold',
  },
});
