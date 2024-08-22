import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import useFetch from '../../hook/useFetch';
import { CategoriesResponse, Category } from '../../types/categoriesTypes';
import FastImage from 'react-native-fast-image';
import { CategoriesScreenNavigationProp } from '../../types/routeTypes';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

type CategoriesScreenProps = {
  navigation: CategoriesScreenNavigationProp;
};

const Categories = (props: CategoriesScreenProps) => {
  const { navigation } = props;
  const { data, loading, error } = useFetch<CategoriesResponse>(
    `${process.env.API_URL}/categories.php`
  );

  const renderCategoryCard = ({ item }: { item: Category }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('Meals', { strCategory: item.strCategory })
        }
      >
        <View style={[styles.categoryCard]}>
          <FastImage
            source={{
              uri: item.strCategoryThumb,
              priority: FastImage.priority.normal,
            }}
            style={{ width: '100%', height: '80%' }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={styles.categoryName}>{item.strCategory}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#FF8343' }}>
      <FlatList
        data={data?.categories}
        keyExtractor={(item) => item.idCategory}
        renderItem={renderCategoryCard}
        numColumns={2}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoryCard: {
    flex: 1,
    margin: 8,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.15,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0a0a0a',
  },
});
