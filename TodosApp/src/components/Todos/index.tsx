import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

import FilterBar from '../FilterBar';
import {Todo} from '../../types/todos';

interface TodosProps {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const Todos = (props: TodosProps) => {
  const [activeTab, setActiveTab] = React.useState('');

  const filterTodos = () =>
    props.todos.filter(todo =>
      activeTab === 'all'
        ? todo
        : activeTab === 'completed'
        ? todo.completed
        : !todo.completed,
    );

  const handleCompleteTodo = (id: number) => {
    props.setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    );
  };

  const handleRemoveTodo = (id: number) => {
    props.setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const renderTodoItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => handleCompleteTodo(item.id)}
        onLongPress={() => handleRemoveTodo(item.id)}
        style={[
          styles.todoItem,
          item.completed ? styles.completed : styles.unCompleted,
        ]}>
        <Text style={[styles.todoText, item.completed && styles.completedText]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={filterTodos()}
      renderItem={renderTodoItem}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={{margin: 10, gap: 10}}
      ListHeaderComponent={
        <FilterBar onFilterChange={tab => setActiveTab(tab)} />
      }
    />
  );
};

export default Todos;

const styles = StyleSheet.create({
  todoItem: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    height: 50,
  },
  completed: {
    backgroundColor: colors.completed,
    textDecorationLine: 'line-through',
  },
  unCompleted: {
    backgroundColor: colors.unCompleted,
  },
  todoText: {
    color: colors.text,
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: colors.gray,
  },
});
