import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Categories: undefined;
  Meals: { strCategory: string };
  MealDetail: { strMeal: string; idMeal: string };
};

export type CategoriesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Categories'
>;

export type MealsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Meals'
>;
export type MealsScreenRouteProp = RouteProp<RootStackParamList, 'Meals'>;

export type MealDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'MealDetail'
>;
