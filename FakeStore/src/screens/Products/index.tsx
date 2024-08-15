import {
  Button,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import Config from 'react-native-config';

import useFetch from '../../hook/useFetch';
import ProductCard from '../../components/ProductCard';
import Loading from '../../components/Loading';

import CustomButtomSheet from '../../components/CustomBottomSheet';
import { TouchableOpacity } from '@gorhom/bottom-sheet';

const Products = ({ navigation, modalRef }: any) => {
  const { data, loading, error } = useFetch(`${Config.API_URL}/products`);

  const [search, setSearch] = React.useState('');
  const [filteredData, setFilteredData] = React.useState([]);
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const sortButtons = [
    {
      title: 'Price: Low to High',
      value: 'price',
      order: 'asc',
    },
    {
      title: 'Price: High to Low',
      value: 'price',
      order: 'desc',
    },
    {
      title: 'Rating: Low to High',
      value: 'rating.rate',
      order: 'asc',
    },
    {
      title: 'Rating: High to Low',
      value: 'rating.rate',
      order: 'desc',
    },
  ];

  const handleSort = (value: string, order: string) => {
    const sortedData = filteredData?.sort((a: any, b: any) => {
      let aValue = value.includes('.')
        ? value.split('.').reduce((o, i) => o[i], a)
        : a[value];
      let bValue = value.includes('.')
        ? value.split('.').reduce((o, i) => o[i], b)
        : b[value];

      if (order === 'asc') {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });
    setFilteredData([...sortedData]);
    modalRef.current?.dismiss();
  };

  const handleInputChange = (text: string) => {
    setSearch(text);
    const newFilteredData = data?.filter((item: any) =>
      item.title.toLowerCase().includes(text.toLowerCase() || '')
    );
    setFilteredData([...newFilteredData]);
  };

  const goToProductDetail = (id: number) => {
    navigation.navigate('ProductDetail', { id });
  };

  const renderProductCard = ({ item }: any) => (
    <ProductCard {...item} onPress={() => goToProductDetail(item.id)} />
  );

  const renderListEmptyComponent = () => (
    <View style={styles.empty_container}>
      <Text style={styles.empty_title}>
        No product found with the name "{search}"
      </Text>
    </View>
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1 }}>
      <CustomButtomSheet ref={modalRef} title="Filter" snapPointsList={['33%']}>
        <View
          style={{
            flex: 1,
            gap: 10,
            flexDirection: 'column',
          }}
        >
          <View
            style={{
              flexDirection: 'column',

              alignItems: 'flex-start',
              gap: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Sort By
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                flexWrap: 'wrap',
              }}
            >
              {sortButtons.map((button) => (
                <TouchableOpacity
                  key={button.title}
                  style={{
                    padding: 10,
                    backgroundColor: '#f4511e',
                    borderRadius: 10,
                  }}
                  onPress={() => handleSort(button.value, button.order)}
                >
                  <Text style={{ color: 'white' }}>{button.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </CustomButtomSheet>

      <View
        style={{
          padding: 10,
          backgroundColor: '#f4511e',
        }}
      >
        <TextInput
          placeholder="Search product..."
          style={styles.search_input}
          onChangeText={handleInputChange}
        />
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductCard}
        ListEmptyComponent={renderListEmptyComponent}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  search_input: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
  },
  empty_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1e1e1',
    padding: 10,
  },
  empty_title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
