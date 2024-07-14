import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export interface ProductItemProps {
  imgURL: string;
  title: string;
  price: string;
  inStock: boolean;
  productsLength: number;
  index: number;
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ProductItem = (props: ProductItemProps) => {
  const isLastSingleItem =
    props.productsLength % 2 !== 0 && props.index === props.productsLength - 1;

  return (
    <View style={[styles.container, isLastSingleItem && {width: width - 20}]}>
      <View style={styles.wrapper}>
        <Image style={styles.image} source={{uri: props.imgURL}} />
        <Text style={styles.title}>{props.title}</Text>

        <Text style={styles.price}>{props.price}</Text>
      </View>
      {!props.inStock && (
        <View style={styles.stockBadge}>
          <Text style={styles.stockBadge_title}>Stokta Yok</Text>
        </View>
      )}
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    width: (width - 30) / 2,

    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  stockBadge: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000095',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  wrapper: {
    padding: 10,
  },
  stockBadge_title: {
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: height / 4,
    borderRadius: 5,
    backgroundColor: 'white',
    objectFit: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 5,
  },
});
