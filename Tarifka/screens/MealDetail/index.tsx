import {
  Dimensions,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { MealDetailScreenRouteProp } from '../../types/routeTypes';
import useFetch from '../../hook/useFetch';
import { MealDetailResponse } from '../../types/mealsTypes';
import FastImage from 'react-native-fast-image';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

type MealDetailProps = {
  route: MealDetailScreenRouteProp;
};

const MealDetail = (props: MealDetailProps) => {
  const { route } = props;
  const { data, loading, error } = useFetch<MealDetailResponse>(
    `${process.env.API_URL}/lookup.php?i=${route.params.idMeal}`
  );

  const handleNavigateYoutubeVideo = () => {
    const youtubeUrl = data!.meals[0].strYoutube;
    Linking.openURL(youtubeUrl);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <ScrollView style={styles.detailPage}>
      <FastImage
        source={{
          uri: data?.meals[0].strMealThumb,
          priority: FastImage.priority.high,
        }}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.mealName}>{data?.meals[0].strMeal}</Text>

        <View style={styles.section}>
          <Text style={styles.title}>Ingredients:</Text>
          {Array.from({ length: 20 }).map((_, index) => {
            const ingredient = data?.meals[0][`strIngredient${index + 1}`];
            const measure: string = data?.meals[0][`strMeasure${index + 1}`];
            if (ingredient) {
              return (
                <Text key={index} style={styles.text}>
                  {ingredient} - {measure}
                </Text>
              );
            }
            return null;
          })}
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Instructions:</Text>
          <Text style={styles.text}>{data?.meals[0].strInstructions}</Text>
        </View>
        {data?.meals[0].strTags && (
          <View style={styles.section}>
            <Text style={styles.title}>Tags:</Text>
            <View style={styles.pills}>
              {data?.meals[0].strTags
                .split(',')
                .filter((item) => !!item)
                .map((tag, index) => (
                  <View key={index} style={styles.pill}>
                    <Text style={styles.pillText}>{tag}</Text>
                  </View>
                ))}
            </View>
          </View>
        )}

        {data?.meals[0].strYoutube && (
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleNavigateYoutubeVideo}
            >
              <Text style={styles.buttonText}>Watch on Youtube</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  detailPage: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 3,
  },
  mealName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    color: '#800000',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    color: '#373A40',
  },
  area: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
  },
  button: {
    backgroundColor: '#C7253E',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  pills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  pill: {
    backgroundColor: '#FF8343',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 999,
    marginRight: 5,
    marginBottom: 5,
  },
  pillText: {
    color: '#fff',
  },
});
