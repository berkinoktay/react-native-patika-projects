import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import useFetch from '../../hook/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const ProductDetail = ({ route }) => {
  const { id } = route.params;
  const { data, loading, error }: any = useFetch(
    `${Config.API_URL}/products/${id}`
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image source={{ uri: data?.image }} style={styles.image} />
        </View>
        <View style={styles.content}>
          <View style={styles.rating_section}>
            <Text style={styles.category}>{data?.category}</Text>
            <View style={styles.rating}>
              {data?.rating?.rate > 0 &&
                Array.from({ length: data.rating.rate }).map((_, index) => (
                  <Text key={index}>⭐</Text>
                ))}
            </View>
          </View>
          <Text style={styles.title}>{data?.title}</Text>
          <Text style={styles.description}>{data?.description}</Text>
          <Text style={styles.price}>{data?.price + '₺'}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image_container: {
    backgroundColor: '#fff',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
  },
  rating_section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
  },

  content: {
    padding: 8,
    flexDirection: 'column',
    gap: 8,
  },
  category: {
    fontSize: 16,
    color: '#4535C1',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'right',
    paddingRight: 12,
  },
});
