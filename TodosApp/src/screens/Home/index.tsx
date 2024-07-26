import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Todos from '../../components/Todos';
import AddTodo from '../../components/AddTodo';
import {Todo} from '../../types/todos';

const Home = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  return (
    <View style={styles.container}>
      <Header todos={todos} />
      <Todos todos={todos} setTodos={setTodos} />
      <AddTodo setTodos={setTodos} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
