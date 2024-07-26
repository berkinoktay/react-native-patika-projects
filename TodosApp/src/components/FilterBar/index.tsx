import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../utils/colors';

interface FilterBarProps {
  onFilterChange: (filter: string) => void;
}

const FilterBar = (props: FilterBarProps) => {
  const [activeFilter, setActiveFilter] = React.useState('all');

  useEffect(() => {
    props.onFilterChange(activeFilter);
  }, []);

  const onPressFilter = (filter: string) => {
    setActiveFilter(filter);
    props.onFilterChange(filter);
  };

  const filterData = [
    {
      key: 'all',
      text: 'Tümü',
    },
    {
      key: 'completed',
      text: 'Tamamlanan',
    },
    {
      key: 'uncompleted',
      text: 'Tamamlanmamış',
    },
  ];
  const renderFilterItem = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.filterItem,
          activeFilter === item.key && styles.activeFilterItem,
        ]}
        onPress={() => onPressFilter(item.key)}>
        <Text style={styles.filterItemText}>{item.text}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={filterData}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderFilterItem}
      contentContainerStyle={{gap: 10}}
    />
  );
};

export default FilterBar;

const styles = StyleSheet.create({
  filterItem: {
    padding: 10,
    marginBottom: 10,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
    backgroundColor: colors.lightGray,
    borderRadius: 9999,
  },
  activeFilterItem: {
    backgroundColor: colors.darkGray,
  },
  filterItemText: {
    color: colors.text,
    fontSize: 16,
  },
});
