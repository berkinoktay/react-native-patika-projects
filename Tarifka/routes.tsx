// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './screens/Categories';
import Meals from './screens/Meals';
import { RootStackParamList } from './types/routeTypes';
import MealDetail from './screens/MealDetail';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#FB773C',
          headerStyle: { backgroundColor: '#fff' },
        }}
        initialRouteName="Categories"
      >
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen
          name="Meals"
          component={Meals}
          options={({ route }) => ({ title: route.params.strCategory })}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetail}
          options={{
            title: 'Meal Detail',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
