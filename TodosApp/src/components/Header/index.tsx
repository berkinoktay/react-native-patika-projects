import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {Todo} from '../../types/todos';

interface HeaderProps {
  todos: Array<Todo>;
}

const Header = (props: HeaderProps) => {
  const totalTodos = props.todos.length;
  const unCompletedTodos = props.todos.filter(todo => !todo.completed).length;

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Yapılacaklar</Text>
      <Text
        style={styles.headerText}>{`${unCompletedTodos}/${totalTodos}`}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerText: {
    color: colors.primary,
    fontSize: 26,
    fontWeight: 'bold',
  },
});
