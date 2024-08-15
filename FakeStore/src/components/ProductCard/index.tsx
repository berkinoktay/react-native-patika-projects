import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';

interface ProductCardProps {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  onPress: () => void;
}

const ProductCard = (props: ProductCardProps) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image source={{ uri: props.image }} style={styles.image} />
        </View>

        <View style={styles.content}>
          <Text style={styles.category}>{props.category}</Text>
          <View style={styles.top_section}>
            <Text style={styles.title} numberOfLines={3}>
              {props.title}
            </Text>
            <Text style={styles.description} numberOfLines={3}>
              {props.description}
            </Text>
          </View>
          <View style={styles.bottom_section}>
            <Text style={styles.price}>{props.price + '₺'}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#e1e1e1',
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  image_container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    minHeight: 100,
    width: 100,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    padding: 6,
    justifyContent: 'space-between',
    gap: 10,
  },
  top_section: {
    flex: 1,
    flexDirection: 'column',
    gap: 4,
  },
  bottom_section: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  description: {
    fontSize: 12,
    color: '#666',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 12,
    color: '#4535C1',
    textTransform: 'uppercase',
  },
  price: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});
