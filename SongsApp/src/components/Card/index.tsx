import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  artist: string;
  year: number;
  isSoldOut: boolean;
}

const Card = (props: CardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_wrapper}>
        <Image source={{ uri: props.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.info_container}>
        <Text style={styles.song_name}>{props.title}</Text>
        <View style={styles.song_details}>
          <Text style={styles.song_artist}>{props.artist}</Text>
          <Text style={styles.song_year}>{props.year}</Text>
        </View>
      </View>
      {props.isSoldOut && (
        <View style={styles.sold_out_box}>
          <Text style={styles.sold_out_text}>TÜKENDİ</Text>
        </View>
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    gap: 16,
  },
  image_wrapper: {
    width: 80,
    height: 80,
    borderRadius: 999,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  info_container: {
    flex: 1,
    flexDirection: 'column',
    gap: 4,
  },
  song_name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  song_details: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  song_artist: {
    fontSize: 14,
  },
  song_year: {
    fontSize: 12,
    color: '#666',
  },
  sold_out_box: {
    padding: 5,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 6,
  },
  sold_out_text: {
    color: 'red',
    fontSize: 10,
    textTransform: 'uppercase',
  },
});
