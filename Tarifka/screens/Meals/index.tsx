import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import useFetch from '../../hook/useFetch';
import { Meal, MealsResponse } from '../../types/mealsTypes';
import FastImage from 'react-native-fast-image';
import {
  MealsScreenNavigationProp,
  MealsScreenRouteProp,
} from '../../types/routeTypes';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

type MealsScreenProps = {
  route: MealsScreenRouteProp;
  navigation: MealsScreenNavigationProp;
};
const Meals = (props: MealsScreenProps) => {
  const { route, navigation } = props;

  const { data, loading, error } = useFetch<MealsResponse>(
    `${process.env.API_URL}/filter.php?c=${route.params.strCategory}`
  );

  const renderProductCard = ({ item }: { item: Meal }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('MealDetail', {
            strMeal: item.strMeal,
            idMeal: item.idMeal,
          })
        }
      >
        <View style={styles.mealCard}>
          <FastImage
            source={{
              uri: item.strMealThumb,
            }}
            style={[StyleSheet.absoluteFill, styles.mealImage]}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Text style={styles.mealName} numberOfLines={1}>
            {item.strMeal}
          </Text>
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
    <View style={styles.MealsPage}>
      <FlatList
        data={data?.meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={renderProductCard}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Meals;

const styles = StyleSheet.create({
  MealsPage: {
    flex: 1,
    backgroundColor: '#FF8343',
  },
  mealCard: {
    flex: 1,
    margin: 8,
    height: Dimensions.get('window').height * 0.18,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mealImage: {
    flex: 1,
  },
  mealName: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'white',
    fontSize: 18,
    padding: 5,
    textAlign: 'center',
    width: '100%',
  },
});
