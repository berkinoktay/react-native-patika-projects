import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Card from '../../components/Card';
import songListData from '../../data/music_list.json';
import Searchbar from '../../components/SearchBar';
const Home = () => {
  const [filteredSongList, setFilteredSongList] = React.useState(songListData);

  const songsSearch = (text: string) => {
    const resultFilteredSongs = songListData.filter(
      (song) =>
        song.title.toLowerCase().includes(text.toLowerCase() || '') ||
        song.artist.toLowerCase().includes(text.toLowerCase() || '')
    );
    setFilteredSongList(resultFilteredSongs);
  };

  const renderCardItem = ({ item }: any) => {
    return <Card {...item} />;
  };

  return (
    <View>
      <View style={styles.search_wrapper}>
        <Text style={styles.page_title}>Music App</Text>
        <Searchbar onchangeText={songsSearch} />
      </View>
      <FlatList
        data={filteredSongList}
        renderItem={renderCardItem}
        keyExtractor={(item, index) => String(index)}
        ItemSeparatorComponent={() => <View style={{ height: 6, backgroundColor: '#f0f0f0' }} />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  search_wrapper: {
    padding: 10,
  },
  page_title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
