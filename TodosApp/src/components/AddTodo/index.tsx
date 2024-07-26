import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {Todo} from '../../types/todos';

interface AddTodoProps {
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const AddTodo = (props: AddTodoProps) => {
  const [text, setText] = React.useState('');
  const addTodo = () => {
    if (text) {
      props.setTodos(prevTodos => [
        ...prevTodos,
        {id: Math.random(), text, completed: false},
      ]);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.input}
        placeholder="Yapılacak..."
        placeholderTextColor={colors.text}
        autoCorrect={false}
        clearButtonMode="always"
      />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={styles.buttonText}>Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  input: {
    width: '100%',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.text,
    color: colors.white,
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
